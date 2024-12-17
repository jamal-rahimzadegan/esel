import React from 'react';
import { FnType } from 'types';
import { Txt } from 'components';
import { FONT_SIZES } from 'constant';
import { LIGHT_THEME } from 'assets/style/theme';
import { CheckBoxContainer } from './CheckBoxStyle';

interface CheckBoxType {
  isChecked?: boolean;
  canSelect?: boolean;
  onChange: FnType;
  key?: string | number;
  label: string;
  labelColor?: keyof typeof LIGHT_THEME;
  labelSize?: keyof typeof FONT_SIZES;
  className?: string;
}

export default function CheckBox(props: CheckBoxType): JSX.Element {
  const { label, isChecked, onChange, key, labelSize, labelColor, className, canSelect = true } = props;

  return (
    <CheckBoxContainer key={key} className={'checkbox my-2 ' + className}>
      <label className="small d-flex">
        {canSelect ? (
          <input className="mx-1 my-0" type="checkbox" checked={isChecked} onChange={(e) => onChange(e)} />
        ) : null}
        <Txt width="95%" color={labelColor} size={labelSize || 'xs'} align="justify">
          {label}
        </Txt>
      </label>
    </CheckBoxContainer>
  );
}
