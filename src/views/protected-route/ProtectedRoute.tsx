import { ReactNode, useEffect } from 'react';
import { NextRouter } from 'next/router';
import { kookie } from 'services/index';

interface Props {
  children: ReactNode;
  router: NextRouter;
}

export default function ProtectedRoute(props: Props): JSX.Element {
  const { children, router } = props;
  const shouldProtect = false;
  // const shouldProtect = !kookie.get('token');
  const isOnUserPage = router.route.includes('user');

  // useEffect(() => {
  //   shouldProtect && router.replace('/user/login');
  // }, [shouldProtect]);

  return <>{shouldProtect ? (isOnUserPage ? children : null) : children}</>;
}
