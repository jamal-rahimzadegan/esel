import React, { memo } from 'react';
import { useRouter } from 'next/router';
import { ICON_PATH } from 'constant';
import { Btn, Card, HyperLink, Image, SVG, Txt } from 'components';
import { HomeContainer, QuickAccessBtn } from './HomeStyle';
import Advertise from 'views/advertise/Advertise';
import useGetAds from 'api/requests/misc/use-get-ads';

function Home() {
  const router = useRouter();
  useGetAds();

  const HomeButton = ({ title, route, icon }) => {
    return (
      <Btn
        className="w-100 my-2"
        // isHome
        iconSize="45px"
        iconSrc={ICON_PATH + `${icon}.svg`}
        textColor="BLACK"
        childWrapperClass="px-2"
        bgColor="APP"
        onClick={() => router.push(route)}
      >
        {title}
      </Btn>
    );
  };

  return (
    <>
      <HomeContainer>
        <Card className="my-3 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-10 center-items flex-column">
          <HomeButton route="/project/new" title="پروژه جدید" icon="new-projects" />
          <HomeButton route="/project/on-going" title="پروژه های جاری" icon="on-going-projects" />
          <HomeButton route="/rules-book-bank" title="بانک قوانین و کتب" icon="rules-bank" />
          <Image alt="contractor" src={ICON_PATH + 'white-contractor.svg'} height="200px" width="100px" />
          <Txt color="WHITE" className="my-2" size="s" isBold>
            اپلیکیشن جامع نظارت ساختمان
          </Txt>
        </Card>
        <HyperLink href="quick-access">
          <QuickAccessBtn>
            <SVG height={100} width={100} color="APP" path="M0,0 L50,0 L70,50 L50,100 L0,100z" />
            <Txt className="quick-access__title">دسترسی سریع</Txt>
          </QuickAccessBtn>
        </HyperLink>
      </HomeContainer>
      <Advertise page="MainPage" />
    </>
  );
}

export default memo(Home);
