import React, { useCallback, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { BaseError, formatEther, parseEther } from 'viem';
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWatchContractEvent,
  useWriteContract,
} from 'wagmi';
import Skeleton from '../../../components/Skeleton';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { JoKenPoContract } from '../../../services/wagmiConfig';
import {
  ChoiceCard,
  GameStatus,
  PlayGameChoices,
  PlayGameContainer,
  PlayGameTitle,
} from './styles';
import { sepolia } from 'viem/chains';
import { useQueryClient } from '@tanstack/react-query';

// import { Container } from './styles';

enum JoKenPo {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

const PlayGame: React.FC = () => {
  const { address } = useAccount();
  const queryClient = useQueryClient();
  const [userLastTransactionHash, setUserLastTransactionHash] =
    useLocalStorage<string>(`@LAST_TRANSACTION_HASH_${address}`, '', [address]);
  const {
    data: transactionHash,
    isPending: isWritingOnBlockchain,
    writeContractAsync: playJoKenPo,
  } = useWriteContract({
    mutation: {
      onError: (error) => {
        const errorMessage = error as BaseError;
        toast.error(errorMessage.shortMessage);
      },
    },
  });
  const {
    data: gameResult,
    isLoading: isLoadingResult,
    queryKey: gameResultQueryKey,
  } = useReadContract({
    ...JoKenPoContract,
    functionName: 'getResult',
  });
  const {
    data: currentBid,
    isLoading: isLoadingCurrentBid,

    queryKey: currentBidQueryKey,
  } = useReadContract({
    ...JoKenPoContract,
    functionName: 'getBid',
  });
  const {
    data: winnersList,
    isLoading: isLoadingWinnersList,

    queryKey: winnersListQueryKey,
  } = useReadContract({
    ...JoKenPoContract,
    functionName: 'getWinners',
  });

  const userData = useMemo(() => {
    if (!winnersList) return {};
    const user = winnersList.find(
      (winner: { playerAddress: string }) => winner.playerAddress === address,
    );
    return {
      address,
      totalWins: user?.totalWins.toString() ?? 0,
      totalEarnings: formatEther(user?.totalEarnings ?? 0n),
    };
  }, [winnersList, address]);

  const playGame = useCallback(
    async (choice: JoKenPo) => {
      if (isWritingOnBlockchain) {
        toast.info('Wait for the transaction to be mined');
        return;
      }
      toast.promise(
        playJoKenPo({
          ...JoKenPoContract,
          functionName: 'play',
          args: [choice],
          value: parseEther('0.001'),
          __mode: 'prepared',
        }),
        {
          pending: 'Waiting for confirmation...',
          success: 'Transaction sent to the blockchain',
        },
      );
    },
    [isWritingOnBlockchain, playJoKenPo],
  );

  const isFetchingData = useMemo(
    () => isLoadingResult || isLoadingCurrentBid || isLoadingWinnersList,

    [isLoadingResult, isLoadingCurrentBid, isLoadingWinnersList],
  );

  const {
    error: transactionError,
    failureReason: transactionFailureReason,
    isLoading: isWaitingForTransactionReceipt,
    isSuccess: isTransactionReceiptSuccessful,
  } = useWaitForTransactionReceipt({
    chainId: sepolia.id,
    hash: userLastTransactionHash as `0x${string}`,
  });

  useWatchContractEvent({
    ...JoKenPoContract,
    eventName: 'Player',
    onLogs: () => {
      toast.info(`Game result updated`);
      queryClient.invalidateQueries({ queryKey: gameResultQueryKey });
      queryClient.invalidateQueries({ queryKey: winnersListQueryKey });
      queryClient.invalidateQueries({ queryKey: currentBidQueryKey });
    },
  });

  useEffect(() => {
    if (transactionHash !== userLastTransactionHash && transactionHash) {
      setUserLastTransactionHash(transactionHash);
    }
  }, [transactionHash, setUserLastTransactionHash, userLastTransactionHash]);

  return (
    <PlayGameContainer>
      <PlayGameTitle>Choose your weapon</PlayGameTitle>
      <Skeleton isLoading={isFetchingData} width="100%" height="120px">
        <GameStatus>
          {userLastTransactionHash && (
            <div>
              <span>Your last play: </span>{' '}
              <a
                href={`https://sepolia.etherscan.io/tx/${userLastTransactionHash}`}
                target="_blank"
                rel="noreferrer"
              >
                {userLastTransactionHash}
              </a>
              {isWaitingForTransactionReceipt && (
                <label>Waiting for transaction confirmation...</label>
              )}
              {(!!transactionError || !!transactionFailureReason) && (
                <label>
                  {transactionFailureReason?.message ||
                    (transactionError as BaseError).shortMessage}
                </label>
              )}
              {isTransactionReceiptSuccessful && (
                <label>Transaction successful!</label>
              )}
            </div>
          )}
          <div>
            <span>Your Total Wins: </span>
            {userData?.totalWins ?? 0}
          </div>

          <div>
            <span>Current Game status:</span> {gameResult}
          </div>

          <div>
            <span>Minimum Bid: </span>
            {formatEther(currentBid ?? 0n)} ETH
          </div>
        </GameStatus>
      </Skeleton>

      <PlayGameChoices>
        <ChoiceCard onClick={() => playGame(JoKenPo.Rock)}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/502/624/non_2x/rock-stones-and-boulders-in-cartoon-style-free-png.png"
            alt="Rock"
          />
          <p>Rock</p>
        </ChoiceCard>
        <ChoiceCard onClick={() => playGame(JoKenPo.Paper)}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/829/102/large_2x/vintage-banner-old-banner-free-png.png"
            alt="Paper"
          />
          <p>Paper</p>
        </ChoiceCard>
        <ChoiceCard onClick={() => playGame(JoKenPo.Scissors)}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/018/818/206/original/cartoon-scissors-icon-png.png"
            alt="Scissors"
          />
          <p>Scissors</p>
        </ChoiceCard>
      </PlayGameChoices>
    </PlayGameContainer>
  );
};

export default PlayGame;
