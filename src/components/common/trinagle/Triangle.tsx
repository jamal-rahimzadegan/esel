import React from 'react';
import { TriangleStyle } from './TriangleStyle';

type TriangleType = {
  dir?: string;
  size: string;
  className?: string;
  hasBorder?: string;
  borderColor?: string;
  bgColor?: string;
};

export default function Triangle(props: TriangleType): JSX.Element {
  const { dir, className, size = '20px', hasBorder, borderColor, bgColor } = props;

  return (
    <TriangleStyle className={className} {...props}>
      <div className={dir} />
    </TriangleStyle>
  );
}
