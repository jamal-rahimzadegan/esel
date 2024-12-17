import styled from 'styled-components';
import Btn from '../../core/btn/Btn';

export const NextArrow = styled(Btn)`
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  z-index: 20;
  position: absolute;
  border-width: 0;
  width: 40px;
  height: 80px;
  right: 0;
  font-size: 25px;
  box-shadow: 0 4px 8px 0 ${(props) => props.theme.SHADOW};
  &:hover {
    box-shadow: 0 8px 16px 0 ${(props) => props.theme.SHADOW};
  }
`;

export const PrevArrow = styled(Btn)`
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  z-index: 20;
  position: absolute;
  border-width: 0;
  width: 40px;
  height: 80px;
  font-size: 25px;
  left: 0;
  box-shadow: 0 4px 8px 0 ${(props) => props.theme.SHADOW};
  &:hover {
    box-shadow: 0 8px 16px 0 ${(props) => props.theme.SHADOW};
  }
`;
