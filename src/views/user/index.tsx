import React from 'react';
import { useRouter } from 'next/router';
import { Btn, Card, Image, Txt } from 'components';
import { ICON_PATH, IMG_PATH } from 'constant';
import { ContractorImgContainer, YellowFooter } from './UserStyle';

export default function User() {
  const router = useRouter();

  const AuthBtn = (btnProps) => {
    const { title, icon, route } = btnProps;
    return (
      <Btn
        onClick={() => router.push(route)}
        width="100px"
        bgColor="GREEN"
        grDir="left"
        childWrapperClass="py-1"
        className="mr-4"
        hasIcon={false}
      >
        <Txt size="s" color="WHITE">
          {title}
        </Txt>
      </Btn>
    );
  };

  return (
    <Card bgColor="CARD_BG" height="100vh" className="d-flex flex-column align-items-center pt-5">
      <Image src={IMG_PATH + 'logo-with-name.png'} alt="app logo" width="200px" height="200px" objectFit="contain" />
      <ContractorImgContainer>
        <Image width="" src={ICON_PATH + 'contractor.svg'} alt="app logo" height="250px" objectFit="cover" />
      </ContractorImgContainer>
      <YellowFooter>
        {/*<AuthBtn route="/user/signup" icon="" title="ثبت نام" />*/}
        <AuthBtn route="/user/login" icon="" title="ورود" />
      </YellowFooter>
    </Card>
  );
}
