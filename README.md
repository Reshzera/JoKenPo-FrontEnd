# JoKenPo Game Interface

Welcome to the JoKenPo Game Interface repository. This React application, crafted with TypeScript and built with Vite, integrates with the Ethereum blockchain to provide a decentralized gaming experience. Our implementation utilizes cutting-edge web technologies like Three.js for 3D graphics, Viem and Wagmi hooks for a seamless Web3 integration. You can check out this project live at: [JoKenPo Game Interface](https://jo-ken-po-front-end.vercel.app/play)

## Project Structure

Below is the structure of the project detailing important directories and files:

```plaintext
FRONT
├── public              # Static files
├── src                 # Source files for the React application
│   ├── ABI             # Application Binary Interface for smart contracts
│   ├── components      # React components
│   ├── hooks           # Custom React hooks
│   ├── layouts         # Layout components for page structure
│   ├── pages           # Page components
│   ├── services        # Service files for handling backend communication
│   ├── styles          # Style files, typically CSS or similar
│   ├── types           # TypeScript type definitions
│   ├── utils           # Utility functions
│   ├── App.tsx         # Main React component that starts your app
│   ├── main.tsx        # Entry point for the application logic
│   ├── routes.tsx      # Routing definitions for the app
│   ├── styled-components.d.ts # Styled-components type definitions
│   └── vite-env.d.ts   # Type definitions for Vite
├── .env                # Environment variables (NOT to be committed)
├── index.html          # Entry point for the application

```

## Quick Start

1. **Install dependencies**

```bash
yarn
```

2. **Run the development server**

```bash
yarn dev
```

3. **Build the project**

```bash
yarn build
```

4. **Lint the project**

```bash
yarn lint
```

5. **Preview the production build**

```bash
yarn preview
```

## Technologies

- **React & TypeScript**: For a type-safe and maintainable codebase.
- **Vite**: For fast development and build workflow.
- **Three.js**: For immersive 3D web graphics.
- **Wagmi & Viem**: To interact with Ethereum wallets and smart contracts.

## Web3 Integration

The project connects to the Ethereum blockchain using the Wagmi hooks, which abstracts the connection to the blockchain and provides a set of tools for developing Ethereum applications. Players can connect their MetaMask wallets to interact with the smart contract located at:

[Smart Contract on Etherscan](https://sepolia.etherscan.io/address/0xe600C8C70057Bb294a01b1B7Fe054F274e1545D6#code)

## License

This project is open source and available under the [MIT License](LICENSE).

---

_Note: This project is for educational and demonstration purposes only. It emphasizes Web3, Three.js, Viem, and Wagmi to showcase the capabilities of Ethereum blockchain interaction and 3D graphics in the browser._
