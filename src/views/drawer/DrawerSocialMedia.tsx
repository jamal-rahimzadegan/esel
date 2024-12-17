import React from 'react';
import { ICON_PATH } from 'constant';
import { ComplexObject } from 'types';
import { HyperLink, Txt, Image } from 'components';
import { SocialMediaContainer, SocialMediaItem } from 'views/drawer/DrawerStyle';

interface SocialMediaProps {
  closeDrawer: () => void;
}

const DrawerSocialMedia = React.memo((props: SocialMediaProps) => {
  const { closeDrawer } = props;

  const ACCOUNTS: ComplexObject = [
    { title: 'esel.app', link: 'https://www.instagram.com/esel.app/', icon: 'drawer-insta.svg' },
    { title: 'eshelapp', link: 'https://telegram.me/eshelapp', icon: 'drawer-telegram.svg' },
    {
      title: 'Whatsapp',
      link: 'https://chat.whatsapp.com/HZ6jYXrGUY67uUCgs5aoVO',
      icon: 'drawer-whatsapp.svg',
    },
  ];

  return (
    <SocialMediaContainer>
      {ACCOUNTS.map((item: ComplexObject) => (
        <HyperLink key={item.link} className="center-items" target="_blank" href={item.link}>
          <SocialMediaItem onClick={() => closeDrawer()} bgColor={item.bgColor}>
            <Txt color="PRIMARY_TEXT" size="xxs" isBold>
              {item.title}
            </Txt>
            <div className="seprator" />
            <Image
              alt={item.title}
              height="30px"
              width="20px"
              className="mr-1"
              src={ICON_PATH + 'social-media/' + item.icon}
            />
          </SocialMediaItem>
        </HyperLink>
      ))}
    </SocialMediaContainer>
  );
});

export default DrawerSocialMedia;
