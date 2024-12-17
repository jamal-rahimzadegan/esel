import styled from 'styled-components';

export const StyledCard = styled.div`
  min-width: 300px;
  margin: 0 10px;
  display: block;
  position: relative;
  background: ${({ theme, bgColor }) => theme[bgColor]};
  border: ${({ theme, borderColor, hasBorder }) =>
    hasBorder ? '1px solid ' + theme[borderColor || 'BRIGHT_BORDER'] : null};

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    width: 0;
    height: 0;
  }
  &:before {
    left: ${({ xPos = '50%' }) => `calc(${xPos} - 11px)`};
    border: 11px solid transparent;
    border-bottom-color: ${({ theme, borderColor }) => theme[borderColor || 'BRIGHT_BORDER']};
  }

  &:after {
    left: ${({ xPos = '50%' }) => `calc(${xPos} - 10px)`};
    border: 10px solid transparent;
    border-bottom-color: ${({ theme, bgColor }) => theme[bgColor]};
  }
`;
