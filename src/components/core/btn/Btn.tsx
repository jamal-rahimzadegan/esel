import React, { ReactNode } from 'react';
import { BorderedContainer, ButtonStyle } from './BtnStyle';
import { Image, Spinner, Txt } from 'components/index';
import { BORDER_RADIUS, FONT_SIZES } from 'constant/index';
import { LIGHT_THEME } from 'assets/style/theme';
import { debounce } from 'utils/index';

export interface BtnProps {
  animated?: boolean;
  isHome?: boolean;
  hasDebounce?: boolean;
  bounceTimeout?: number;
  children: ReactNode;
  bgColor?: keyof typeof LIGHT_THEME;
  textColor?: keyof typeof LIGHT_THEME;
  type?: string;
  className?: string;
  borderColor?: keyof typeof LIGHT_THEME;
  onClick?: Function;
  disabled?: boolean;
  hasGlow?: boolean;
  hasBorder?: boolean;
  hasRadius?: boolean;
  hasGradient?: boolean;
  grDir?: 'right' | 'left';
  borderRadius?: keyof typeof BORDER_RADIUS;
  childWrapperClass?: string;
  width?: string;
  height?: string;
  hasArrow?: boolean;
  hasIcon?: boolean;
  iconSrc?: string;
  iconSize?: string;
  textSize?: keyof typeof FONT_SIZES;
  reverse?: boolean;
  isLoading?: boolean;
}

export default function Btn(props: BtnProps): JSX.Element {
  const {
    hasDebounce = false,
    isHome,
    bounceTimeout,
    children,
    onClick,
    bgColor = 'TRANSPARENT',
    textColor = 'WHITE',
    hasGlow = true,
    hasBorder = true,
    type,
    hasRadius = true,
    borderColor = 'WHITE',
    childWrapperClass,
    hasGradient = true,
    grDir = 'right',
    borderRadius,
    width,
    hasIcon = true,
    hasArrow = true,
    iconSrc,
    iconSize,
    textSize = 'xs',
    reverse,
    isLoading,
    disabled,
    height,
    animated,
    ...restProps
  } = props;

  const handleClick = () => {
    onClick?.();
    // if (typeof onClick === 'function') {
    //   hasDebounce ? debounce(onClick, bounceTimeout) : onClick();
    // } else console.error('onClick does not exist');
  };

  const RenderBtn = () => {
    return hasBorder ? (
      <BorderedContainer className={childWrapperClass} hasBorder={hasBorder} borderColor={borderColor}>
        <div className={`d-flex align-items-center justify-content-between ${hasArrow ? '' : 'w-100'}`}>
          {hasIcon ? (
            <Image
              alt="ico"
              className={`ml-1 order-${reverse ? 1 : 0}`}
              width={iconSize || '20px'}
              height={iconSize || '20px'}
              src={iconSrc}
              objectFit="contain"
            />
          ) : null}
          <Txt className="one-line-text" isBold size={textSize} color={textColor}>
            {children}
          </Txt>
        </div>
        {hasArrow ? (
          <Txt size="xxl" color={textColor}>
            ›
          </Txt>
        ) : null}
      </BorderedContainer>
    ) : (
      <div className="center-items">{children}</div>
    );
  };

  return (
    <ButtonStyle
      isHome={isHome}
      width={width}
      height={height}
      borderRadius={borderRadius}
      type={type}
      grDir={grDir}
      hasGlow={hasGlow}
      hasGradient={hasGradient}
      textColor={textColor}
      hasRadius={hasRadius}
      bgColor={bgColor}
      disabled={disabled || isLoading}
      onClick={() => onClick?.()}
      animated={animated}
      {...restProps}
    >
      {isLoading ? <Spinner size={25} className="m-2" bgColor="SHADOW" rippleColor="PRIMARY_TEXT" /> : <RenderBtn />}
    </ButtonStyle>
  );
}
