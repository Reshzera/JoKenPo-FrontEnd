import styled from 'styled-components';

export const UnauthorizedLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    z-index: -1;
  }
`;

export const UnauthorizedLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 100%;
  min-width: 100%;
`;
