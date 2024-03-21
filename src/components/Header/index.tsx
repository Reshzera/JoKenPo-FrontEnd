import React from 'react';
import {
  HeaderContainer,
  HeaderContentWrapper,
  ProtoTokenLogo,
  ProtoTokenLogoContainer,
} from './styles';
import ButtonMetaMask from '../ButtonMetaMask';
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <ProtoTokenLogoContainer>
          <ProtoTokenLogo>
            <img
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029"
              alt="Google"
            />
          </ProtoTokenLogo>
          <label>JoKenPo</label>
        </ProtoTokenLogoContainer>
        <ButtonMetaMask />
      </HeaderContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
