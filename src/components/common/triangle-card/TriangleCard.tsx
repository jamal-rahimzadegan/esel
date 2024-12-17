import React from 'react';
import { CardType } from '../../core/Card/Card';
import { StyledCard } from './TriangleCardStyle';

interface TriangleCardType extends CardType {
  size?: string;
}

export default function TriangleCard(props: TriangleCardType): any {
  const { children, hasBorder = true, size = '20px' } = props;
  return <StyledCard {...props}>{children}</StyledCard>;
}
