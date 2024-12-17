import styled from 'styled-components';

export const IconStyle = styled.i`
  font-size: ${({ size }) => size || 16}px;
  color: ${({ theme, color }) => theme[color || 'PRIMARY_TEXT']};
  transition: all 500ms;
`;
