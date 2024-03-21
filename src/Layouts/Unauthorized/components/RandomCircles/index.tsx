import React from 'react';
import { Circles } from './styles';

// import { Container } from './styles';

type RandomCirclesProps = {
  cirlces: number;
};

const RandomCircles: React.FC<RandomCirclesProps> = ({ cirlces = 10 }) => {
  return Array.from({ length: cirlces }).map((_, index) => (
    <Circles
      key={index}
      $size={Math.random() * 200 + 300}
      $type={index % 2 === 0 ? 'primary' : 'secondary'}
      $positionStartX={Math.random() * 100}
      $positionStartY={Math.random() * 100}
      $animationX={Math.random() * 200 - 100}
      $animationY={Math.random() * 200 - 100}
      $animationTime={Math.random() * 10 + 4}
    />
  ));
};

export default RandomCircles;
