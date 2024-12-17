import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getSwipeDirection, toggleTheme } from 'utils';
import { useHitAction } from 'hooks';
import { isDev, lazyLoad, selectorState } from 'constant';
import createAction, { actions } from 'store/actions';
import { GlobalStyle } from 'assets/style/global-style';
import { AppLayout, Main } from './LayoutStyle';
import InternetStatus from './internet-status/InternetStatus';
import { kookie } from 'services/index';

const { Notify, Loader, DrawerMenu, Header, AddToHomeScreen } = {
  Header: lazyLoad(() => import('./header/Header').then((header) => header)),
  Notify: lazyLoad(() => import('components/index').then((module) => module.Notify)),
  Loader: lazyLoad(() => import('components/index').then((module) => module.Loader)),
  DrawerMenu: lazyLoad(() => import('components/index').then((module) => module.DrawerMenu)),
  AddToHomeScreen: lazyLoad(() => import('components/index').then((module) => module.AddToHomeScreen)),
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Index({ children }: LayoutProps): JSX.Element {
  const { asPath: path } = useRouter();
  const hitAction = useHitAction();
  const {
    theme: { theme },
  } = useSelector(selectorState);

  const showHeaderAndDrawer = !path.includes('user') && path !== '/';

  const handleSwipeEnd = () => {
    if (showHeaderAndDrawer) {
      getSwipeDirection('end').then((dir) => {
        hitAction(createAction(actions[dir === 'left' ? 'OPEN_DRAWER' : 'CLOSE_DRAWER']));
      });
    }
  };

  return (
    <ThemeProvider theme={toggleTheme('light')}>
      <FakeTokenSet />
      <GlobalStyle />
      <InternetStatus />
      {showHeaderAndDrawer ? <Header /> : null}
      <AppLayout
        id="app-layout"
        // onTouchStart={(e) => getSwipeDirection('start', e)}
        // onTouchMove={(e) => getSwipeDirection('move', e)}
        // onTouchEnd={handleSwipeEnd}
        path={path}
      >
        <Main theme={theme}>
          {children}
          {/*<PageTransition>{children}</PageTransition>*/}
        </Main>
        <DrawerMenu />
        <Loader />
        <Notify />
        <AddToHomeScreen />
      </AppLayout>
    </ThemeProvider>
  );
}

function FakeTokenSet() {
  const shouldShow = isDev;
  const tempToken = '';

  const saveToken = () => {
    kookie.set('token', tempToken);
    alert('Token has been set');
  };

  return shouldShow ? <button onClick={saveToken}>set token</button> : null;
}
