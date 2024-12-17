import styled from 'styled-components';
import { BORDER_RADIUS } from 'constant/index';
import Card from '../Card/Card';

export const CircleDiv = styled(Card)`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border: 2px solid ${({ theme }) => theme.BRIGHT_BORDER};
  background: ${({ theme }) => theme.CARD_BG};
  border-radius: ${() => BORDER_RADIUS['round-pill']};
  margin-bottom: 10px;
  overflow: hidden;
`;
