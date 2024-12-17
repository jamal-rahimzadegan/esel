import React from 'react';
import { BORDER_RADIUS } from 'constant/index';
import { StyledCard } from './StyledCard';
import { LIGHT_THEME } from 'assets/style/theme';

export type CardType = {
  onClick?: Function;
  bgColor?: keyof typeof LIGHT_THEME;
  className?: string;
  children?: React.ReactNode;
  height?: string;
  width?: string;
  borderColor?: string;
  hasBorder?: boolean;
  disabled?: boolean;
  borderRadius?: keyof typeof BORDER_RADIUS;
  id?: string;
};

export default function Card(props: CardType): any {
  return <StyledCard {...props} />;
}
