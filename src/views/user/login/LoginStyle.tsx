import styled from 'styled-components';
import Card from 'components/core/Card/Card';

export const Triangle = styled(Card)`
  margin-top: 10px;
  \twidth: 0;
  \theight: 0;
  \tborder-left: 8px solid transparent;
  \tborder-right: 8px solid transparent;
  \tborder-bottom: 8px solid ${(props) => props.theme.WHITE};
`;

export const InputBox = styled(Card)`
  padding: 20px;
  content: '';
`;
