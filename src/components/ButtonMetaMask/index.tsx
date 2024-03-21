import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { shortenAddress } from '../../utils/convertFunctions';
import { MetaMaskButton } from './styles';

// import { Container } from './styles';
interface ButtonMetaMaskProps {
  styles?: React.CSSProperties;
}

const ButtonMetaMask: React.FC<ButtonMetaMaskProps> = ({ styles }) => {
  const { connect } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <MetaMaskButton
      style={styles}
      onClick={() => {
        if (address) {
          disconnect();
          return;
        }
        connect({
          connector: injected(),
          chainId: sepolia.id,
        });
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
        alt="Google"
      />
      <span>
        {!address
          ? 'Connect MetaMask'
          : `Connected to: ${shortenAddress(address)}`}
      </span>
    </MetaMaskButton>
  );
};

export default ButtonMetaMask;
