import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  max-height: 100vh;
  width: max-content;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.bg100};
  border-right: 1px solid ${({ theme }) => theme.colors.bg300};
`;

export const SideMenuLogoSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text200};
    margin-top: 0px;
  }
  user-select: none;
  cursor: pointer;
`;

export const SideMenuAccountInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;
  label {
    background-color: ${({ theme }) => theme.colors.bg200};
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;
    white-space: nowrap;
    font-weight: 500;
    margin-right: 8px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text200};
  }

  span {
    font-size: 14px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text100};
  }
`;

export const SideMenuNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text200};
    margin-bottom: 8px;
    margin-top: 32px;
  }
`;

export const SideMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  word-spacing: 8px;
  color: ${({ theme }) => theme.colors.text100};

  position: relative;
  user-select: none;
`;

export const ActiveTabIndicator = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg200};
  border-radius: 4px;
  left: 0;
  display: flex;
  z-index: -1;
  &::before {
    content: '';
    width: 4px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accent100};
    border-radius: 4px;
  }
`;

export const LogutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bg200};
  padding: 8px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 500;
  margin-right: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text200};
  border: none;
  outline: none;
  margin-top: 16px;
  cursor: pointer;
`;
