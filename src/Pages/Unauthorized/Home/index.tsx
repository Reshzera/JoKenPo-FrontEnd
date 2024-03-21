import React from 'react';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import WelcomeSection from './components/WelcomeSection';
import { HomeContainer } from './styles';

// import { Container } from './styles';

const Home: React.FC = () => {
  // const { account, accountShort } = useContext(MetaMaskContext);

  return (
    <HomeContainer>
      <WelcomeSection />
      <HowItWorksSection />
      <AboutSection />
    </HomeContainer>
  );
};

export default Home;
