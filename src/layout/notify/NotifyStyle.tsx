import styled from 'styled-components';
import Card from 'components/core/Card/Card';

export const AlertContainer = styled(Card)`
  overflow-y: auto;
  height: 0;
  min-width: 310px;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%);
  box-shadow: 0 0 0 10px black;
`;
