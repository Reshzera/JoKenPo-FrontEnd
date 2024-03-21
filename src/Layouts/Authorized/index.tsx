import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthorizedLayoutContainer, AuthorizedLayoutContent } from './styles';
import SideMenu from '../../components/SideMenu';

// import { Container } from './styles';

const Authorized: React.FC = () => {
  return (
    <AuthorizedLayoutContainer>
      <SideMenu />
      <AuthorizedLayoutContent>
        <Outlet />
      </AuthorizedLayoutContent>
    </AuthorizedLayoutContainer>
  );
};

export default Authorized;
