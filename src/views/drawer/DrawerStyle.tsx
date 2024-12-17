import styled from 'styled-components';
import { BORDER_RADIUS } from 'constant';
import Card from 'components/core/Card/Card';

export const DrawerContainer = styled(Card)`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
  overflow: hidden;
  top: 48px;
  left: 100%;

  #drawer {
    width: 220px;
    position: absolute;
    bottom: 0;
    background: ${(props) => props.theme.CARD_BG};
    height: calc(100vh - 20px);
    box-shadow: -16px 28px 27px -5px rgba(0, 0, 0, 0.4);
    border-top-left-radius: ${() => BORDER_RADIUS['m']};
  }
`;

export const TriangleDiv = styled(Card)`
  width: 100px;
  height: 100px;
  position: absolute;
  overflow: hidden;

  :after {
    content: '';
    position: absolute;
    width: 25px;
    height: 150px;
    top: -12px;
    background: ${(props) => props.theme.CARD_BG};
    transform: rotate(45deg);
    left: 25px;
    box-shadow: 0 -16px 27px -5px rgba(0, 0, 0, 0.2);
  }
`;

export const SocialMediaContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const SocialMediaItem = styled.div`
  margin: 4px 0;
  background-color: ${({ theme }) => theme.SHADOW};
  border-radius: ${() => BORDER_RADIUS['round-pill']};
  box-shadow: 0 0 2px ${({ theme }) => theme.SHADOW};
  width: 95%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  padding: 6px;

  .seprator {
    margin: 0 6px 4px 0;
    background-color: ${({ theme }) => theme.BRIGHT_BORDER};
    height: 100%;
    width: 2px;
  }
`;
