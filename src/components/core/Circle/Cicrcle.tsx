import React from 'react';
import { Image, Txt } from 'components/index';
import { CircleDiv } from './CircleStyle';

type CircleType = {
  title?: string;
  icon?: string;
  hasIcon?: boolean;
  size?: string;
  className?: string;
  iconSize?: string;
};

export default function Circle(props: CircleType): JSX.Element {
  const { title, icon, className = '', hasIcon = true, size = '100px', iconSize = '40px' } = props;

  return (
    <CircleDiv className={className} size={size}>
      {hasIcon ? <Image alt={icon} width="" src={icon} height={iconSize} objectFit="contain" /> : null}
      <Txt className="title-font" size="s">
        {title}
      </Txt>
    </CircleDiv>
  );
}
