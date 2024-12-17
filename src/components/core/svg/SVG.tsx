import React from 'react';
import { LIGHT_THEME } from 'assets/style/theme';

interface Props {
  type?: string;
  path: string;
  color: keyof typeof LIGHT_THEME;
  height: string | number;
  width: string | number;
  viewBox?: string; // "min-x min-y width height" --> eg: "0 0 50 50"
}

export default function SVG(props: Props): JSX.Element {
  const { path, color, ...restProps } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path d={path} fill={LIGHT_THEME[color]} />
    </svg>
  );
}
