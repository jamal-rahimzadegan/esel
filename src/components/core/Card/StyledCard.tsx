import styled from 'styled-components';
import { BORDER_RADIUS } from 'constant/index';

export const StyledCard = styled.div`
  border-radius: ${({ borderRadius }) => BORDER_RADIUS[borderRadius]};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme[props.bgColor]};
  border: ${({ theme, borderColor }) => (borderColor ? '2px solid' + theme[borderColor] : '')};
`;
