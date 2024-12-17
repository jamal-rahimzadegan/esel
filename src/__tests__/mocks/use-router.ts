// @ts-nocheck
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn(() => ({ route: '/', pathname: '', query: '', asPath: '/home' }));
// nextRouter.useRouter = jest.fn(() => ({ route: '/', pathname: '', query: '', asPath: '/' }));
