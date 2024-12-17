import styled from 'styled-components';
import { Image, TriangleCard } from 'components';

export const ContentContainer = styled(TriangleCard)`
  position: relative;
  min-height: 250px;
  width: 100%;
  padding: 30px;
  text-align: justify;

  .content-logo {
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    opacity: 0.2;
  }
`;

export const NextBtn = styled(Image)`
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    transform: scale(1.7);
  }
`;
