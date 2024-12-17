import styled from 'styled-components';
import { Image } from 'components';
import { BORDER_RADIUS } from 'constant';

export const StyledBook = styled.div`
  margin: 10px 0;
  padding: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 8px;
`;

export const StyledImg = styled(Image)`
  border-radius: ${() => BORDER_RADIUS.s};
  cursor: pointer;
  object-fit: cover;
  height: 250px;
  width: 100%;
  margin: 10px 0;
  box-shadow: 0 1px 2px 0px ${({ theme }) => theme['SHADOW']};
`;
