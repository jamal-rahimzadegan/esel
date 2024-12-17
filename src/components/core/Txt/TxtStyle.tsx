import styled, { css } from 'styled-components';
import { FONT_SIZES } from 'constant/index';

export const StyledText = styled.p`
  //direction: ltr;
  font-weight: ${({ isBold }) => (isBold ? 'bolder' : 'unset')};
  width: ${({ width }) => width ?? 'unset'};
  margin: 0;
  text-align: ${(props) => (props.align ? props.align : null)};
  // font-weight: ${(props) => props.weight};
  font-size: ${(props) => FONT_SIZES[props.size || 'm']};
  //font-size: calc(15px + (15 - 15) * (100vw - 320px) / (768 - 320)); //*
  color: ${({ theme, color }) => theme[color || 'PRIMARY_TEXT']};
  background: ${({ theme, bgColor }) => theme[bgColor || 'TRANSPARENT']};
  text-decoration: ${({ hasDecoration }) => (hasDecoration ? 'underline' : null)};
  


  ${(props) =>
    props.numberOfLines
      ? css`
          display: block;
          display: -webkit-box;
          -webkit-line-clamp: ${props.numberOfLines};
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        `
      : ''};
`;
