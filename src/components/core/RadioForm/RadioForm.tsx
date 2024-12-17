import React from 'react';
import { ComplexObject, FnType } from 'types';
import { FONT_SIZES } from 'constant';
import { LIGHT_THEME } from 'assets/style/theme';
import { RadioItem, RadioContainer } from './RadioFormStyle';

/**  data example:
 [
 {  id: "id", label: 'label1', value: 'value1' },
 {  id: "id", label: 'label2', value: 'value2' },
 {  id: "id", label: 'label3', value: 'value3' },
 ]
 */

interface Props {
  data: { id: string; label: string; value: string }[];
  cb: FnType;
  labelColor?: keyof typeof LIGHT_THEME;
  labelSize?: keyof typeof FONT_SIZES;
  className?: string;
  horizontal?: boolean;
}

export default function RadioForm(props: Props): JSX.Element {
  const { data, cb, labelSize, labelColor, className, horizontal } = props;

  return data?.length ? (
    <RadioContainer horizontal={horizontal} className={className || ''}>
      {data.map(({ id, value, label }) => (
        <RadioItem key={value} labelSize={labelSize} labelColor={labelColor}>
          <input value={value} type="radio" name="radio-item" onChange={(e) => cb({ id, value, label })} />
          <label>{label}</label>
        </RadioItem>
      ))}
    </RadioContainer>
  ) : (
    <></>
  );
}
