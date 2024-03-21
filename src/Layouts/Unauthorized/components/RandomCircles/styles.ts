import styled, { keyframes } from 'styled-components';

type CirclesProps = {
  $animationY?: number;
  $animationX?: number;
  $animationTime?: number;

  $positionStartX?: number;
  $positionStartY?: number;

  $size: number;
  $type: 'primary' | 'secondary';
};

export const Circles = styled.div<CirclesProps>`
  position: fixed;
  top: ${({ $positionStartY }) => $positionStartY}%;
  left: ${({ $positionStartX }) => $positionStartX}%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;

  background: ${({ $type, theme }) =>
    $type === 'primary' ? theme.colors.primary100 : theme.colors.primary200};
  animation: ${({ $animationY, $animationX }) =>
      keyframes`
      0% {
        transform: translate(0, 0);
      }
      100%{
        transform: translate(${$animationX}%, ${$animationY}%);
      }
     `}
    ${({ $animationTime }) => $animationTime || 10}s infinite alternate-reverse;
  z-index: -2;
`;
