import styled, { css, keyframes } from 'styled-components';

export const NavigateLoader = styled.div`
  position: absolute;
  z-index: 101;
  top: 0;
  left: 0;
  width: 10%;
  height: 3px;
  background-color: #17a2b8;
  animation: ${() => increaseWidth} 500ms linear;
`;

const increaseWidth = keyframes`
 0% {
        width: 100px;
    }
    100% {
        width: 100%;

    }
`;
