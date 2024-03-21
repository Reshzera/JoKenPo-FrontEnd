import React, { useRef } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import EthAnimation from '../EthAnimation';
import { HomeWelcomeContainer, HomeWelcomeSection } from './styles';
import { motion } from 'framer-motion';

// import { Container } from './styles';

const fadeInAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const WelcomeSection: React.FC = () => {
  const ref = useRef(null);

  return (
    <HomeWelcomeContainer id="welcome" ref={ref}>
      <HomeWelcomeSection>
        <motion.h1
          viewport={{ amount: 0.5 }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          Welcome to JoKenPo Game
        </motion.h1>
        <motion.p
          viewport={{ amount: 0.7 }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          This is a simple <b>blockchain game</b>, where you can play JoKenPo
          and compete with other players.
        </motion.p>
      </HomeWelcomeSection>
      <EthAnimation />
      <IoIosArrowDropdown />
    </HomeWelcomeContainer>
  );
};

export default WelcomeSection;
