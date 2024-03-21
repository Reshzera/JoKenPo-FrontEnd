import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeHowItWorksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 32px 64px;
  gap: 32px;
  flex: 1;
  min-height: calc(100vh - 70px);
`;

export const HomeHowItWorksTitle = styled(motion.h1)`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text100};
`;

export const HomeHowItWorksContent = styled(motion.div)`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 32px;
  height: max-content;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const HomeHowItWorkStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 24px;
  min-height: 300px;
  overflow: hidden;
  max-height: max-content;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(20.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  svg {
    font-size: 120px;
    color: ${({ theme }) => theme.colors.text100};
  }

  h1 {
    margin-top: 8px;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.text100};
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text200};
  }
`;
