import styled from 'styled-components';
import { Image } from 'components';

export const LogoIndicator = styled(Image)`
  background: ${({ theme }) => theme.APP};
  clip-path: circle();
  padding: 0;
  height: 40px;
  margin-left: 5px;
`;
