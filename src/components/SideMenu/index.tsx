import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  ActiveTabIndicator,
  LogutButton,
  SideMenuAccountInfo,
  SideMenuContainer,
  SideMenuItem,
  SideMenuLogoSection,
  SideMenuNavigation,
} from './styles';
import { useAccount, useDisconnect } from 'wagmi';
import { shortenAddress } from '../../utils/convertFunctions';

// import { Container } from './styles';

const navigationItems = [
  {
    label: 'Dashboard',
    icon: '🏠',
    path: '/',
  },
  {
    label: 'Play',
    icon: '🎮',
    path: '/play',
  },
  {
    label: 'Leaderboard',
    icon: '🏆',
    path: '/leaderboard',
  },
];

const SideMenu: React.FC = () => {
  const currentPath = useLocation().pathname;
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  return (
    <SideMenuContainer>
      <SideMenuLogoSection>
        <img src="/images/logo-jokenpo.webp" alt="Logo" draggable={false} />
        <span>Jokenpo</span>
      </SideMenuLogoSection>

      <SideMenuAccountInfo>
        <label>Wallet Account</label>
        <span>{shortenAddress(address ?? '-')}</span>
      </SideMenuAccountInfo>

      <SideMenuNavigation>
        <span>Navigation</span>
        {navigationItems.map((item) => (
          <SideMenuItem key={item.label} to={item.path}>
            {item.icon} {item.label}
            {currentPath === item.path && (
              <ActiveTabIndicator layoutId="activeTab" />
            )}
          </SideMenuItem>
        ))}
      </SideMenuNavigation>
      <LogutButton
        onClick={() => {
          disconnect();
        }}
      >
        Logout
      </LogutButton>
    </SideMenuContainer>
  );
};

export default SideMenu;
