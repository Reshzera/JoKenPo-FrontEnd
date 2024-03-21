import { createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import JoKenPoABI from '../ABI/JoKenPoABI';
export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [
    injected({
      target: 'metaMask',
    }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
});

export const JoKenPoContract = {
  abi: JoKenPoABI,
  address: import.meta.env.VITE_CONTRACT_ADDRESS as `0x${string}`,
  chainId: sepolia.id,
} as const;
