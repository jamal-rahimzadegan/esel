import React from 'react';
import { useRouter } from 'next/router';
import { useHitAction } from 'hooks';
import { ICON_PATH } from 'constant';
import { HyperLink, Image } from 'components/index';
import createAction, { actions } from 'store/actions';
import { BackBtn, HeaderContainer } from '../LayoutStyle';

function Header(): JSX.Element {
  const { asPath: currentRoute, back } = useRouter();
  const hitAction = useHitAction();
  const isOnHomePage = currentRoute === '/home';

  const openDrawerMenu = () => hitAction(createAction(actions.OPEN_DRAWER));

  return (
    <HeaderContainer isOnHomePage={isOnHomePage}>
      <Image
        onClick={openDrawerMenu}
        className="pointer"
        objectFit="contain"
        src={ICON_PATH + 'menu.svg'}
        alt="menu"
        height={28}
        width={28}
      />
      <HyperLink href="/home">
        <Image objectFit="contain" src={ICON_PATH + 'logocrop.svg'} alt="logo" height={35} width={130} />
      </HyperLink>
      {!isOnHomePage ? (
        <BackBtn onClick={back} src={ICON_PATH + 'back.svg'} alt="back" height={40} width={40} />
      ) : (
        <div className="mr-5 ml-4" />
      )}
    </HeaderContainer>
  );
}

export default React.memo(Header);
