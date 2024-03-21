import React, { useMemo } from 'react';
import {
  LeaderBoardContainer,
  LeaderBoardHeader,
  LeaderBoardRow,
  LeaderBoardTable,
  LeaderBoardTitle,
} from './styles';
import { useReadContract } from 'wagmi';
import { JoKenPoContract } from '../../../services/wagmiConfig';
import { formatEther } from 'viem';
import { shortenAddress } from '../../../utils/convertFunctions';
import Skeleton from '../../../components/Skeleton';

// import { Container } from './styles';

const LeaderBoard: React.FC = () => {
  const { data: winnersList, isLoading: isLoadingWinnersList } =
    useReadContract({
      ...JoKenPoContract,
      functionName: 'getWinners',
    });

  const topLeaders = useMemo(() => {
    if (!winnersList) return [];
    const leaders = [...winnersList];
    const sortedLeaders = leaders.sort(
      (a, b) => Number(b.totalWins) - Number(a.totalWins),
    );
    return sortedLeaders;
  }, [winnersList]);
  return (
    <LeaderBoardContainer>
      <LeaderBoardTitle>LeaderBoard</LeaderBoardTitle>
      <Skeleton isLoading={isLoadingWinnersList} width="100%" height="100%">
        <LeaderBoardTable>
          <LeaderBoardHeader>
            <h1>Position</h1>
            <h1>Player</h1>
            <h1>Wins</h1>
            <h1>Earnings</h1>
          </LeaderBoardHeader>
          {topLeaders.map((leader, index) => {
            return (
              <LeaderBoardRow key={leader.playerAddress}>
                <span>{index + 1}.</span>
                <span>{shortenAddress(leader.playerAddress, 8)}</span>
                <span>{Number(leader.totalWins)}</span>
                <span>{formatEther(leader.totalEarnings)} ETH</span>
              </LeaderBoardRow>
            );
          })}
        </LeaderBoardTable>
      </Skeleton>
    </LeaderBoardContainer>
  );
};

export default LeaderBoard;
