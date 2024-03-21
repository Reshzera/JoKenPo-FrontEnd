import React, { useMemo } from 'react';
import { formatEther } from 'viem';
import { useAccount, useReadContract } from 'wagmi';
import { JoKenPoContract } from '../../../services/wagmiConfig';
import { shortenAddress } from '../../../utils/convertFunctions';
import {
  DashboardCard,
  DashboardCardTopLeaders,
  DashboardCardTopLeadersRow,
  DashboardContainer,
  DashboardContent,
  DashboardTitle,
  SeeMoreRanking,
} from './styles';
import Skeleton from '../../../components/Skeleton';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { address } = useAccount();
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
    return sortedLeaders.slice(0, 5);
  }, [winnersList]);

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

  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      <DashboardContent>
        <Skeleton isLoading={isLoadingWinnersList} width="100%" height="100px">
          <DashboardCard>
            <h2>Total Earnings</h2>
            <p>{userData?.totalEarnings ?? 0} ETH</p>
          </DashboardCard>
        </Skeleton>
        <Skeleton isLoading={isLoadingWinnersList} width="100%" height="100px">
          <DashboardCard>
            <h2>Total Wins</h2>
            <p>{userData?.totalWins ?? 0}</p>
          </DashboardCard>
        </Skeleton>
        <Skeleton isLoading={isLoadingWinnersList} width="100%" height="200px">
          <DashboardCardTopLeaders>
            <h2>Top Leaders</h2>
            <DashboardCardTopLeadersRow>
              <span>Player Address</span>
              <span>Wins</span>
            </DashboardCardTopLeadersRow>
            {topLeaders.map((leader, index) => (
              <DashboardCardTopLeadersRow key={index}>
                <span>
                  {index + 1} - {leader.playerAddress}
                </span>
                <span>{Number(leader.totalWins)}</span>
              </DashboardCardTopLeadersRow>
            ))}
            {topLeaders.length === 1 && (
              <SeeMoreRanking to="/leaderboard">Ver mais</SeeMoreRanking>
            )}
          </DashboardCardTopLeaders>
        </Skeleton>
        <Skeleton isLoading={isLoadingWinnersList} width="100%" height="100px">
          <DashboardCard>
            <h2>Player Address</h2>
            <p>{shortenAddress(address ?? '-')}</p>
          </DashboardCard>
        </Skeleton>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
