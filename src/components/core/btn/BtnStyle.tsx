import styled from 'styled-components';
import { BORDER_RADIUS } from 'constant';
import { shadeColor } from 'utils';

export const ButtonStyle = styled.button`
  position: relative;
  height: ${(props) => props.height || '50px'};
  width: ${(props) => props.width || '100%'};
  border-radius: ${({ borderRadius, hasRadius }) => (hasRadius ? BORDER_RADIUS[borderRadius || 'round-pill'] : 0)};
  background-color: ${({ theme, bgColor }) => theme[bgColor] || 'transparent'};
  color: ${({ theme, textColor }) => theme[textColor]};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  box-shadow: ${({ hasGlow, theme, bgColor }) => (hasGlow ? ` 0px 1px 5px 1px ${theme[bgColor]}8C` : '')};
  padding: 2px;
  transition: all 0.2s;

  background-image: ${({ theme, grDir, bgColor, hasGradient, isHome }) =>
    hasGradient
      ? `linear-gradient(to ${grDir}, ${theme[isHome ? 'ORANGE' : bgColor]},${shadeColor(theme[bgColor], 50)})`
      : ''};
`;

export const BorderedContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ borderRadius }) => BORDER_RADIUS[borderRadius || 'round-pill']};
  border: ${({ hasBorder, theme, borderColor }) => (hasBorder ? `2px solid ${theme[borderColor]}` : '')};
`;
