import styled from 'styled-components';
import Card from 'components/core/Card/Card';

export const HomeContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.SECOND_BG};
`;

export const QuickAccessBtn = styled.button`
  top: 30px;
  position: absolute;
  cursor: pointer;
  left: -30px;

  .quick-access__title {
    transform: rotate(-90deg);
    position: absolute;
    text-align: center;
    top: 40%;
    left: 4px;
    font-size: 11px;
    font-weight: bold;
  }
`;
