import React, { memo, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Lottie from 'lottie-react-web';
import { CenterWrapper, HtmlHead } from 'components';
import { ROUTES, selectorState } from 'constant';
import splashMotion from 'assets/animations/splash.json';

function IndexPage() {
  const router = useRouter();
  const { user } = useSelector(selectorState);
  const { title, desc } = ROUTES.landing;
  const animateRef = useRef();

  const navigate = async () => {
    setTimeout(() => {
      const route = user.isLoggedIn() ? '/home' : '/user/login';
      return router.replace(route);
    }, 3500);
  };

  // @ts-ignore
  useEffect(navigate, []);

  return (
    <>
      <HtmlHead title={title} description={desc} />
      <CenterWrapper>
        <Lottie
          height="100%"
          width="100%"
          ref={animateRef}
          speed={3}
          options={{
            loop: false,
            animationData: splashMotion,
          }}
        />
        {/*<Video*/}
        {/*  objectFit="cover"*/}
        {/*  src="/static/videos/esel-splash.mp4"*/}
        {/*  width="100%"*/}
        {/*  height="100%"*/}
        {/*  onError={navigate}*/}
        {/*  onEnded={navigate}*/}
        {/*  autoPlay*/}
        {/*  muted*/}
        {/*/>*/}
      </CenterWrapper>
    </>
  );
}

export default memo(IndexPage);
