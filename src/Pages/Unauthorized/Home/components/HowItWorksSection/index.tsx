import React from 'react';
import {
  LiaConnectdevelop,
  LiaEthereum,
  LiaMoneyBillWaveSolid,
  LiaRocketSolid,
  LiaUserCheckSolid,
  LiaWalletSolid,
} from 'react-icons/lia';
import {
  HomeHowItWorkStep,
  HomeHowItWorksContainer,
  HomeHowItWorksContent,
  HomeHowItWorksTitle,
} from './styles';
import ButtonMetaMask from '../../../../../components/ButtonMetaMask';

// import { Container } from './styles';
const fadeInAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HowItWorksSection: React.FC = () => {
  return (
    <HomeHowItWorksContainer id="how-it-works">
      <HomeHowItWorksTitle
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeInAnimation}
      >
        How it works
      </HomeHowItWorksTitle>
      <HomeHowItWorksContent
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={containerVariants}
      >
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaWalletSolid />

          <h1>Create a Metamask Wallet</h1>
          <p>
            Metamask is a crucial tool for navigating the decentralized web,
            acting as a secure gateway to the Ethereum blockchain and its vast
            ecosystem of Dapps. To engage in our blockchain-based Jokenpo game—a
            modern twist on Rock-Paper-Scissors—a Metamask wallet is essential.
            Setting up Metamask not only lets you play but also immerses you in
            the broader world of decentralized applications. Start your journey
            into Dapps by creating a Metamask wallet today.
          </p>
        </HomeHowItWorkStep>

        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaConnectdevelop />

          <h1>Connect the Metamask Wallet</h1>
          <p>
            Connecting your Metamask wallet is the first step towards engaging
            with the dynamic and decentralized world of Ethereum-based
            applications. By linking Metamask to our platform, you unlock the
            ability to seamlessly interact with our Jokenpo game, alongside a
            myriad of other decentralized services and games.
          </p>
        </HomeHowItWorkStep>
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaEthereum />

          <h1>Deposit Funds</h1>
          <p>
            Following the connection of your Metamask wallet, the next step
            involves depositing funds into your wallet on the Sepolia Network.
            This crucial step enables you to participate actively in
            transactions and games within the blockchain ecosystem. You have the
            flexibility to deposit any amount of Ether, tailored to your
            preferences and gaming strategies. Utilizing faucets simplifies this
            process, allowing for an easy and accessible means to add funds to
            your wallet.
          </p>
        </HomeHowItWorkStep>
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaRocketSolid />

          <h1>Play JoKenPo</h1>
          <p>
            Once your wallet is funded, the exciting world of JoKenPo awaits
            you. This engaging game pits you against other players in a
            decentralized environment, offering not just thrilling gameplay but
            also the chance to win rewards. JoKenPo transcends traditional
            gaming, leveraging blockchain technology to ensure fairness,
            transparency, and real-time settlements.
          </p>
        </HomeHowItWorkStep>
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaMoneyBillWaveSolid />
          <h1>Earn Rewards</h1>
          <p>
            Victories in JoKenPo bring more than just satisfaction; they come
            with rewards that you can claim directly into your Metamask wallet.
            While these rewards are amassed within the Sepolia test network and
            cannot be transferred to the Ethereum Mainnet, the value of playing
            goes beyond mere financial gains. This platform offers a unique
            opportunity to immerse yourself in blockchain gaming, refine your
            strategies, and understand the mechanics of JoKenPo.
          </p>
        </HomeHowItWorkStep>
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaUserCheckSolid />
          <h1>Try it Now</h1>
          <p>
            Ready to experience the world of decentralized gaming and
            blockchain-based applications? Just click the button below, allow us
            to connect to your Metamask wallet, and start playing JoKenPo. The
            game is simple yet engaging, offering a unique opportunity to
            experience the power of blockchain technology in a fun and
            interactive manner. Join us today and explore the potential of
            decentralized applications.
          </p>
          <ButtonMetaMask
            styles={{
              marginTop: '16px',
            }}
          />
        </HomeHowItWorkStep>
      </HomeHowItWorksContent>
    </HomeHowItWorksContainer>
  );
};

export default HowItWorksSection;
