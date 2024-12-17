import React from 'react';
import { convertToPer } from 'utils';
import { FONT_SIZES } from 'constant';
import { LIGHT_THEME } from 'assets/style/theme';
import { StyledText } from './TxtStyle';

interface TextProps {
  size?: keyof typeof FONT_SIZES;
  className?: string;
  onClick?: Function;
  weight?: string;
  children?: any;
  align?: string;
  numberOfLines?: string;
  color?: keyof typeof LIGHT_THEME;
  bgColor?: keyof typeof LIGHT_THEME;
  role?: string;
  dangerouslySetInnerHTML?: any;
  hasDecoration?: boolean;
  isBold?: boolean;
  isPerDigit?: boolean;
  width?: string;
  type?: 'p' | 'h1' | 'span';
}

export default function Txt(props: TextProps): JSX.Element {
  const {
    isPerDigit = false,
    type = 'p',
    size,
    weight,
    children,
    className = '',
    onClick,
    align,
    hasDecoration,
    ...restProps
  } = props;

  return (
    <StyledText
      as={type}
      hasDecoration={hasDecoration}
      size={size}
      onClick={() => onClick?.()}
      className={className}
      {...restProps}
      children={isPerDigit ? convertToPer(children) : children}
    />
  );
}
