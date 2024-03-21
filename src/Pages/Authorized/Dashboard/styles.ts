import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  min-height: 90%;
  flex-direction: column;
  padding: 64px 32px;
`;

export const DashboardTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};
  color: ${({ theme }) => theme.colors.text200};
`;

export const DashboardContent = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 24px;
`;

export const DashboardCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: max-content;
  border-radius: 8px;
  border: 0.5px dashed ${({ theme }) => theme.colors.text200};
  background-color: ${({ theme }) => theme.colors.bg300};

  h2 {
    color: ${({ theme }) => theme.colors.primary300};
    font-size: 24px;
    font-weight: 600;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    color: ${({ theme }) => theme.colors.text100};
    font-size: 16px;
    font-weight: 400;
    margin-top: 16px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const DashboardCardTopLeaders = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: max-content;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bg300};
  border: 1px solid ${({ theme }) => theme.colors.text200};

  h2 {
    color: ${({ theme }) => theme.colors.primary300};
    font-size: 24px;
    font-weight: 600;
  }
`;

export const DashboardCardTopLeadersRow = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.colors.text100};
    font-size: 16px;
    font-weight: 400;
    margin-top: 16px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SeeMoreRanking = styled(Link)`
  color: ${({ theme }) => theme.colors.primary300};
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  text-align: right;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary200};
  }
`;
