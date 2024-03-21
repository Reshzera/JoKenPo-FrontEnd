/// <reference types="vite/client" />

interface Window {
  ethereum?: {
    isMetaMask: boolean;
    isBraveWallet: boolean;
  };
}

declare module '*.obj';
declare module '*.mtl';
