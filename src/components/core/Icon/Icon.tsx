import React from 'react';
import { IconStyle } from './IconStyle';

interface IconProps {
  name: string;
  size?: number;
  className: string;
  color: string;
  isBold?: boolean;
}

export default function Icon(props: IconProps): JSX.Element {
  const { name, className, color, isBold, size, ...restProps } = props;
  return (
    <IconStyle className={`icon-${name} ${className || ''}`} color={color} isBold={isBold} size={size} {...restProps} />
  );
}
