import styled, { keyframes } from 'styled-components';

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
};

const pulse = keyframes`
    0% {
        background-color:  #404040;
    }
    50% {
        background-color: #292929;
    }
    100% {
        background-color: #404040;
    }
    `;

export const SkeletonContainer = styled.div<SkeletonProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  margin: ${({ margin }) => margin || '0px'};
  animation: ${pulse} 1.5s infinite;
`;
