import React, { useState } from 'react';
import { generateArr } from 'utils/index';
import { REGEX } from 'constant/index';
import formatInputs from './format-inputs';
import { InputElement } from 'components/core/DigitInput/InputElement';

interface DigitInputProps {
  className?: string;
  length?: number;
}

export default function DigitInput(props: DigitInputProps) {
  const { className = '', length = 4 } = props;
  const [value, onChange] = useState('');
  const inputOptions = {
    acceptedCharacters: REGEX.ONLY_NUM,
    length,
    value,
    onChange,
  };

  const digits = formatInputs(inputOptions);

  return (
    <div className={className}>
      {generateArr(length).map((item, i) => (
        <InputElement autoFocus={i === 0} {...digits[i]} />
      ))}
    </div>
  );
}
