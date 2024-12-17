import React, { memo } from 'react';
import anime from 'animejs';
import { useRouter } from 'next/router';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ComplexObject } from 'types';
import { ICON_PATH, lazyLoad } from 'constant';
import { Card, Image, Txt } from 'components';
import { useClickOutside, useHitAction, usePrevValue } from 'hooks';
import createAction from 'store/actions';
import { DrawerContainer, TriangleDiv } from './DrawerStyle';
import { lockScroll, ls } from 'utils/index';
import { kookie } from 'services/index';
import logout from 'utils/logout';

const SocialMedia = lazyLoad(() => import('./DrawerSocialMedia'));

const DrawerMenu = React.memo(function DrawerMenu(): JSX.Element {
  const router = useRouter();
  const hitAction = useHitAction();
  const { isShowDrawer }: ComplexObject = useSelector((state: RootStateOrAny) => state.theme);
  const prevIsShowDrawer = usePrevValue(isShowDrawer);

  const closeDrawer = () => hitAction(createAction('CLOSE_DRAWER'));

  const toggleDrawer = (type) => {
    lockScroll(isShowDrawer);
    anime({
      targets: '#drawer-menu',
      easing: 'linear',
      duration: 500,
      left: type === 'open' ? ['100%', 0] : [0, '100%'],
    });
  };

  // close the drawer menu when user clicks outside
  useClickOutside({
    targetID: 'drawer',
    isRunning: isShowDrawer,
    cb: closeDrawer,
    runOnUpdate: () => {
      if (prevIsShowDrawer !== isShowDrawer) toggleDrawer(isShowDrawer ? 'open' : 'close');
    },
  });

  const DrawerBtn = (btnProps) => {
    const { route, title, icon, onClick } = btnProps;

    const performClick = () => {
      closeDrawer();

      if (route) return router.push(route);
      onClick?.();
    };

    return router.asPath !== route ? (
      <Card className="d-flex my-2 align-content-start pointer" onClick={performClick}>
        {icon ? <Image className="mr-2" src={ICON_PATH + icon} alt={icon} width={19} height={19} /> : null}
        <Txt size="s" className="mr-2" isBold>
          {title}
        </Txt>
      </Card>
    ) : null;
  };

  return (
    <DrawerContainer id="drawer-menu">
      <TriangleDiv />
      <Card id="drawer">
        <DrawerBtn route="/home" title="خانه" icon="home.svg" />
        <DrawerBtn route="/profile" title="حساب کاربری" icon="user.svg" />
        <DrawerBtn route="/project/archive" title="پروژه های پایان یافته" icon="archive-done-projects.svg" />
        <DrawerBtn route="/calender" title="ثبت یادداشت" icon="calender.svg" />
        <DrawerBtn route="/events" title="مشاهده یادداشتها" icon="calender.svg" />
        <DrawerBtn route="/present" title="معرفی اپ" icon="logo.svg" />
        <DrawerBtn route="/order-ads" title="سفارش آگهی" icon="advertise.svg" />
        <DrawerBtn route="/telegram-channels" title="اشل در استان ها" icon="cities.svg" />
        <DrawerBtn route="/msg-box" title="ارتباط با ما" icon="envelope.svg" />
        <DrawerBtn title="خروج از حساب" icon="" onClick={logout} />
        <SocialMedia closeDrawer={closeDrawer} />
      </Card>
    </DrawerContainer>
  );
});

export default memo(DrawerMenu);
