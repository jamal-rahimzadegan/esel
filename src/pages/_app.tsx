// @ts-nocheck

import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';
import { REDUX_WRAPPER, store as reduxStore } from 'store/store';
import createAction, { actions } from 'store/actions';
import axiosReq from 'services/api-service';
import Layout from 'components/../layout';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/style/index.css';
import ProtectedRoute from 'views/protected-route/ProtectedRoute';
import { kookie } from 'services/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

class EselMock extends App<AppInitialProps> {
  static getInitialProps = async (context: AppContext) => {
    const { Component, ctx } = context;

    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        pathname: ctx.pathname,
      },
    };
  };

  async componentWillMount() {
    await reduxStore().dispatch(createAction(actions.WATCH_SYNC_USER_DATA));
  }

  componentDidMount() {
    // sync token for using in csr
    kookie.get('token') && (axiosReq.token = kookie.get('token'));

    // registering service worker (for pwa)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js', { scope: '/' })
        .then(async (reg) => {
          // console.log(`--- Service worker is registered ----> `, reg);
        })
        .catch((e) => console.log('Service Worker registration failed: ', e));
    }
  }

  public render() {
    const { Component, pageProps, router } = this.props;
    return (
      <QueryClientProvider client={queryClient}>
        <Layout>
          <ProtectedRoute router={router}>
            <Component {...pageProps} />
          </ProtectedRoute>
        </Layout>
      </QueryClientProvider>
    );
  }
}

export default REDUX_WRAPPER.withRedux(EselMock);
