import React from 'react';
import styled from 'styled-components';
import { Image } from 'components';

export const AppLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme, path }) => {
    if (path === '/') return theme.WHITE;
    return theme[path === '/home' ? 'SECOND_BG' : 'BACKGROUND'];
  }};
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.APP};
  z-index: 11;
`;

export const BackBtn = styled(Image)`
  float: left;
  margin: 0 10px;
  cursor: pointer;
  object-fit: contain;
`;

export const Main = styled.main`
  min-height: 100vh;
`;

export const TransitionContainer = styled.div`
  opacity: ${({ transitionType }) => (transitionType === 'in' ? 1 : 0)};
  transition: 400ms;
`;
