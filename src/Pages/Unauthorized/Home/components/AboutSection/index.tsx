import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  HomeAboutCard,
  HomeAboutContainer,
  HomeAboutContent,
  HomeAboutContentCodeSection,
  HomeAboutListCard,
  HomeAboutTitle,
} from './styles';

// import { Container } from './styles';
const fadeInAnimationTop = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const fadeInAnimationLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const ContractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "./IJoKenPo.sol";
import "./JKPLibrary.sol";

contract JoKenPo is IJoKenPo {
    address private _player1;
    address payable private immutable _owner;
    JKPLibrary.Choice private _player1Choice = JKPLibrary.Choice.None;
    string private _result = "";
    uint256 private _bid = 0.001 ether;
    uint8 private _commission = 10;
    JKPLibrary.Player[] private _winners;

    constructor() {
        _owner = payable(msg.sender);
    }

    function getCommission() external view returns (uint8) {
        return _commission;
    }

    function setCommission(uint8 _newCommission) external restricted {
        require(
            _player1 == address(0),
            "You can not change the commission with a game in progress"
        );
        _commission = _newCommission;
    }

    function getBid() external view returns (uint256) {
        return _bid;
    }

    function setBid(uint256 _newBid) external restricted {
        require(
            _player1 == address(0),
            "You can not change the bid with a game in progress"
        );
        _bid = _newBid;
    }

    function getResult() external view returns (string memory) {
        return _result;
    }

    function updateWinner(address _winner, uint256 _earning) private {
        for (uint i = 0; i < _winners.length; i++) {
            if (_winners[i].playerAddress == _winner) {
                _winners[i].totalWins++;
                _winners[i].totalEarnings += _earning;
                return;
            }
        }
        _winners.push(JKPLibrary.Player(_winner, _earning, 1));
    }

    function getWinners() external view returns (JKPLibrary.Player[] memory) {
        return _winners;
    }

    function finishGame(
        string memory newResult,
        address winnerAddress
    ) private {
        address contractAddress = address(this);
        uint256 toPlayer = (contractAddress.balance / 100) *
            (100 - _commission);
        payable(winnerAddress).transfer(toPlayer);
        _owner.transfer(contractAddress.balance);

        updateWinner(winnerAddress, toPlayer);

        _result = newResult;
        _player1 = address(0);
        _player1Choice = JKPLibrary.Choice.None;
    }

    function play(
        JKPLibrary.Choice _choice
    ) external payable returns (string memory) {
        require(tx.origin != _owner, "Owner can not play");
        require(tx.origin != _player1, "Player 1 can not play with himself");
        require(_choice != JKPLibrary.Choice.None, "Invalid choice");
        require(msg.value >= _bid, "Invalid bid");

        if (_player1Choice == JKPLibrary.Choice.None) {
            _player1 = tx.origin;
            _player1Choice = _choice;
            _result = "Player 1 plays waiting player 2";
            return _result;
        }

        if (
            _player1Choice == JKPLibrary.Choice.Rock &&
            _choice == JKPLibrary.Choice.Scissors
        ) {
            finishGame("Player 1 Wins", _player1);
            return _result;
        }
        if (
            _player1Choice == JKPLibrary.Choice.Scissors &&
            _choice == JKPLibrary.Choice.Paper
        ) {
            finishGame("Player 1 Wins", _player1);
            return _result;
        }
        if (
            _player1Choice == JKPLibrary.Choice.Paper &&
            _choice == JKPLibrary.Choice.Rock
        ) {
            finishGame("Player 1 Wins", _player1);
            return _result;
        }
        if (_player1Choice == _choice) {
            _result = "Draw Game, the prize was doubled";
            return _result;
        }
        finishGame("Player 2 Wins", tx.origin);
        return _result;
    }

    modifier restricted() {
        require(tx.origin == _owner, "You do not have permission");
        _;
    }
}
`;

const AboutSection: React.FC = () => {
  return (
    <HomeAboutContainer id="about">
      <HomeAboutTitle
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.5, delay: 1 }}
        variants={fadeInAnimationTop}
      >
        About the project
      </HomeAboutTitle>
      <HomeAboutContent>
        <HomeAboutContentCodeSection
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1 }}
          variants={fadeInAnimationLeft}
        >
          <h1>Smart Contract Code</h1>
          <SyntaxHighlighter language="solidity" style={a11yDark}>
            {ContractCode}
          </SyntaxHighlighter>
        </HomeAboutContentCodeSection>
        <HomeAboutListCard
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1 }}
          variants={containerVariants}
        >
          <HomeAboutCard variants={fadeInAnimationLeft}>
            <h1>Objective of the project</h1>
            <p>
              The project was created to learn more about the Ethereum
              blockchain and smart contracts. Making a simple game to understand
              the concepts of smart contracts and how they work. The game is a
              simple version of Rock, Paper, Scissors, where the players can
              play against each other and the winner takes the prize.
            </p>
          </HomeAboutCard>
          <HomeAboutCard variants={fadeInAnimationLeft}>
            <h1>Technologies used</h1>
            <p>
              The project was developed using the Sepolia blockchain and
              Solidity for the smart contract. To create the Solidity smart
              contract, was used the Hardhat framework to compile, deploy and
              test the contract. The Smart Contract was deployed on the Sepolia
              Testnet and you can check the contract on the Sepolia Etherscan.
            </p>
          </HomeAboutCard>
          <HomeAboutCard variants={fadeInAnimationLeft}>
            <h1>Created by</h1>
            <p>
              The project was created by Rafael Eitaro Oshiro a software
              engineer with a passion for blockchain and decentralized
              applications. The project was created to learn more about the
              Ethereum blockchain and smart contracts. If you want to know more
              about the project or contact the creator, you can check the GitHub
              repository or send an email.
            </p>
          </HomeAboutCard>
        </HomeAboutListCard>
      </HomeAboutContent>
    </HomeAboutContainer>
  );
};

export default AboutSection;
