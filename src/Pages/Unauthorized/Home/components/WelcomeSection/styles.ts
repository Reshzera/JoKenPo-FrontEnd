import styled, { keyframes } from 'styled-components';

const UpAndDown = keyframes`
  0% {
    transform: rotateZ(180deg);
  }
  25% {
    transform: translateY(-60%) rotateZ(180deg);
  }
  50% {
    transform: translateY(-60%) rotateZ(360deg);
  }
  75% {
    transform: translateY(0%) rotateZ(360deg);
  }
  100% {
    transform: rotateZ(180deg) translate(0%);
  }
`;

export const HomeWelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 64px;
  flex-wrap: wrap;
  gap: 32px;
  position: relative;
  flex: 1;
  min-height: calc(100vh - 70px);
  svg {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.colors.text100};
    animation: ${UpAndDown} 2s infinite ease;
    font-size: 32px;
  }

  @media (max-width: 1000px) {
    svg {
      bottom: 0;
    }
  }
`;

export const HomeWelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  h1 {
    font-size: 120px;
    font-weight: 500;
    max-width: 100%;
    color: ${({ theme }) => theme.colors.text100};
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    width: 100%;
    max-width: 600px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text100};
    b {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.accent100};
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 80px;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 60px;
    }
  }
`;
