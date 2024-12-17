import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }`;

export const Loading = styled.div`
  width: ${({ size }) => size || 35}px;
  height: ${({ size }) => size || 35}px;
  border: 3px solid ${({ theme, bgColor }) => theme[bgColor || 'MODAL_BG']};
  border-radius: 50%;
  border-top-color: ${({ theme, rippleColor }) => theme[rippleColor || 'APP']};
  display: inline-block;
  animation: ${spinner} 0.6s linear infinite;
`;
