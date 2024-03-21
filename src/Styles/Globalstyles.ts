import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  body{
    background-color: ${({ theme }) => theme.colors.bg100};
    overflow-x: hidden;
  }
  button{
    border: 1px solid red;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a3a3a3;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: content-box;
  }
`;
