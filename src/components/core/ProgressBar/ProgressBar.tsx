import React from 'react';
import { Txt } from 'components/index';
import { LIGHT_THEME } from 'assets/style/theme';
import { BarContainer } from './ProgressBarStyle';

export type ProgressBarProps = {
  value: number; //between 0 - 100
  label: string;
  bgColor?: keyof typeof LIGHT_THEME;
  barColor?: keyof typeof LIGHT_THEME;
  max: number;
  id: string;
  className?: string;
  txtClassname?: string;
  barClassName?: string;
  height: string;
  hasRadius?: boolean;
};

export default function ProgressBar(props: ProgressBarProps): any {
  const { value = 25, label, max = 100, id, className, txtClassname, barClassName } = props;
  return (
    <div className={className}>
      {label ? <Txt className={txtClassname}>{label}</Txt> : null}
      <BarContainer {...props}>
        <progress className={barClassName} id={id} value={value} max={max} />
      </BarContainer>
      <Txt className={txtClassname}>{value}%</Txt>
    </div>
  );
}
