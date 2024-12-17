import styled from 'styled-components';
import { Card, Txt } from 'components/index';
import { BORDER_RADIUS } from 'constant/index';

export const ItemContainer = styled.div`
  margin-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${({ isOpen }) => (isOpen ? '9.2rem' : '0')};

  .parent-btn {
    z-index: ${({ isOpen }) => (isOpen ? 10 : 0)};
    font-size: ${({ isOpen }) => (isOpen ? '12px' : '16px')};
    font-weight: ${({ isOpen }) => (isOpen ? 'bold' : 'normal')};
  }
`;

export const FirstLevelWrapper = styled(Card)`
  margin-bottom: 300px;
  padding: 10px;
`;

export const SecondLevelWrapper = styled(Card)`
  position: absolute;
  height: 300px;
  width: 0;
  overflow-y: auto;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.CARD_BG};
  box-shadow: 0 0 5px ${({ theme }) => theme.SHADOW};
  border-radius: ${() => BORDER_RADIUS['s']};
`;

export const ItemText = styled(Txt)`
  cursor: pointer;
  background-color: ${({ theme, i }) => theme[i % 2 == 0 ? 'SHADOW' : 'HOVER']};
  padding: 6px;
  margin: 1px 0;
  width: 90%;
  text-align: right;
`;
