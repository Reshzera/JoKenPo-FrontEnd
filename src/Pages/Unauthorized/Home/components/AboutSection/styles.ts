import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const HomeAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  gap: 32px;
  flex: 1;
  min-height: calc(100vh - 70px);
`;

export const HomeAboutTitle = styled(motion.h1)`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text100};
`;

export const HomeAboutContent = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap-reverse;
  max-height: 100%;
  gap: 64px;
`;

export const HomeAboutContentCodeSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(20.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  max-height: 70vh;

  width: 100%;
  max-width: 800px;

  flex: 1;
  padding: 16px 16px 8px 16px;
  margin-bottom: auto;

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text100};
    margin-bottom: 8px;
  }
`;

export const HomeAboutListCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
`;

export const HomeAboutCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 32px;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(20.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text100};
  }
  p {
    font-size: 16px;
    margin-top: 8px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text200};
  }
`;
