import { ls } from 'utils';
import { Hr, Txt } from 'components';
import { InstallBtn, InstallContainer } from './AddToHomeScreenStyle';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddToHomeScreen(): JSX.Element {
  const router = useRouter();
  const [shouldShow, setShouldShow] = useState<boolean>(!ls.get('installed'));

  const dismiss = () => {
    setShouldShow(false);
  };

  const accept = () => {
    setShouldShow(false);
    ls.set('installed', true);
  };


  if(router.pathname.includes("user"))return  <></>

  return <>{shouldShow ?
    <InstallContainer>
      <Txt size="s" align="justify">شما می توانید از منو بالای مرورگر با زدن دکمه <b>⋮</b> و انتخاب افزودن به صفحه اصلی، برنامه را به صفحه اصلی تلفن همراه خود اضافه نمائید. </Txt>
      <Hr/>
      <div className="d-flex align-items-center justify-content-around mt-2">
        <InstallBtn onClick={accept}>دیگه نپرس</InstallBtn>
        <InstallBtn onClick={dismiss}>ادامه</InstallBtn>
      </div>
    </InstallContainer> : null}</>;
}