import styled from 'styled-components';

export const PlayGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 64px 32px;
`;

export const PlayGameTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};
  color: ${({ theme }) => theme.colors.text200};
`;

export const GameStatus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div {
    display: flex;
    width: max-content;
    align-items: center;
    gap: 4px;

    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text200};

    span {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text100};
    }

    label {
      background-color: ${({ theme }) => theme.colors.bg300};
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.text100};
      margin-left: 8px;
    }

    a,
    a:visited {
      color: ${({ theme }) => theme.colors.primary300};
      font-size: 16px;
      font-weight: 600;

      text-align: right;
    }
  }
`;

export const PlayGameChoices = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 64px;
`;

export const ChoiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  width: 160px;
  height: 160px;

  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.colors.accent100};
  background-color: ${({ theme }) => theme.colors.bg300};
  cursor: pointer;
  transition: all 0.3s ease;

  p {
    margin-top: auto;
    color: ${({ theme }) => theme.colors.text100};
    font-size: 16px;
    font-weight: 400;
  }

  img {
    max-width: 100%;
    max-height: 90px;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 32px 0px ${({ theme }) => theme.colors.accent200};
  }
`;
