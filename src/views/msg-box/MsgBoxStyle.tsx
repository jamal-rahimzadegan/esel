import styled from 'styled-components';
import { Image } from 'components';

export const ContractorImg = styled(Image)`
  transform: scaleX(-1);
`;

export const SocialImg = styled(Image)`
  height: 30px;
  width: 30px;
  object-fit: cover;
  clip-path: circle();
`;

export const TriangleInput = styled.div`
  justify-content: flex-end;
  width: 85%;
  position: relative;
  display: flex;
  align-items: start;
  padding-right: 32px;

  .inp {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.DIM_BORDER};
    padding: 5px;
  }

  .tri {
    top: 10px;
    right: 0;
    position: absolute;
  }
`;
