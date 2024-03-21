import React from 'react';
import { SkeletonContainer } from './styles';

// import { Container } from './styles';

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  isLoading: boolean | undefined;
  children: React.ReactNode;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
  margin,
  isLoading = true,
  children,
}) => {
  if (isLoading) {
    return (
      <SkeletonContainer
        width={width}
        height={height}
        borderRadius={borderRadius}
        margin={margin}
      />
    );
  }
  return <>{children}</>;
};

export default Skeleton;
