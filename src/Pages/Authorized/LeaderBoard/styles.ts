import styled from 'styled-components';
export const LeaderBoardContainer = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  min-height: 90%;
  flex-direction: column;
  padding: 64px 32px;
`;

export const LeaderBoardTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};
  color: ${({ theme }) => theme.colors.text200};
`;

export const LeaderBoardTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.bg300};
  border-radius: 4px;
  padding: 16px 24px;
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.colors.bg200};
`;

export const LeaderBoardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  gap: 24px;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary100};

  h1 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text200};
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const LeaderBoardRow = styled.div`
  display: grid;
  align-items: center;
  border-radius: 4px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  padding: 16px 24px;
  gap: 0px 24px;
  background-color: ${({ theme }) => theme.colors.bg200};

  span {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text200};
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
