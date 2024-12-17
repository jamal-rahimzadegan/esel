import React, { InputHTMLAttributes } from 'react';
import { InpTypes } from 'types/index';
import { BORDER_RADIUS } from 'constant/index';
import { InputContainer, LabelStyle, StyledInput, StyledTextArea } from './InputStyle';
import { LIGHT_THEME } from 'assets/style/theme';
import { sanitizeInput } from 'utils/index';

// @ts-ignore
interface InputProps extends InputHTMLAttributes<any> {
  name?: string;
  width?: string;
  height?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  value?: string;
  SideIcon?: Function;
  onEnterPress?: Function;
  onChange?: Function;
  className?: string;
  wrapperClassName?: string;
  placeholder?: string;
  bgColor?: string;
  type?: InpTypes;
  maxLength?: string;
  borderColor?: string;
  sideBtnColor?: string;
  label?: string;
  containerClassName?: string;
  labelColor?: string;
  multiLine?: boolean;
  rows?: number;
  cols?: number;
  textColor?: keyof typeof LIGHT_THEME;
  borderRadius?: keyof typeof BORDER_RADIUS;
  id?: string;
  autocomplete?: 'on' | 'off';
  ref?: (input: HTMLInputElement | null) => void;
}

export default function Input(props: InputProps): JSX.Element {
  const {
    ref,
    id,
    SideIcon,
    height,
    width,
    onEnterPress,
    className,
    wrapperClassName,
    label = '',
    multiLine = false,
    labelColor,
    containerClassName,
    placeholder,
    rows = 4,
    cols = 40,
    borderRadius,
    disabled,
    value,
    bgColor = 'INPUT_BG',
    textColor = 'PRIMARY_TEXT',
    onChange,
    autocomplete = 'off',
    ...restProps
  } = props;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnterPress?.();
    }
  };

  const handleOnChange = (e) => sanitizeInput(e.target.value) && onChange?.(e);

  return (
    <div className={wrapperClassName}>
      {label ? <LabelStyle labelColor={labelColor}>{label}</LabelStyle> : null}
      <InputContainer
        disabled={disabled}
        bgColor={bgColor}
        height={height}
        width={width}
        borderRadius={borderRadius}
        className={'d-flex align-items-center justify-levels-between w-100 ' + containerClassName}
      >
        {multiLine ? (
          <StyledTextArea
            autocomplete={autocomplete}
            textColor={textColor}
            placeholder={placeholder}
            onKeyDown={handleKeyPress}
            className={className}
            rows={rows}
            onChange={handleOnChange}
            cols={cols}
            value={value}
            borderRadius={borderRadius}
            {...restProps}
          />
        ) : (
          <>
            <StyledInput
              ref={ref}
              autocomplete={autocomplete}
              textColor={textColor}
              borderRadius={borderRadius}
              placeholder={placeholder}
              className={className}
              onChange={handleOnChange}
              value={value}
              onKeyDown={handleKeyPress}
              {...restProps}
            />
            {SideIcon ? <SideIcon /> : null}
          </>
        )}
      </InputContainer>
    </div>
  );
}
