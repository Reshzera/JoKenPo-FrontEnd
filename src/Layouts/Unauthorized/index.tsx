import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import {
  UnauthorizedLayoutContainer,
  UnauthorizedLayoutContent,
} from './styles';
import RandomCircles from './components/RandomCircles';

// import { Container } from './styles';

const Unauthorized: React.FC = () => {
  return (
    <>
      <UnauthorizedLayoutContainer>
        <Header />
        <UnauthorizedLayoutContent>
          <Outlet />
        </UnauthorizedLayoutContent>
      </UnauthorizedLayoutContainer>
      <RandomCircles cirlces={10} />
    </>
  );
};

export default Unauthorized;
