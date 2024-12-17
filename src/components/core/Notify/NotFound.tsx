import React from 'react';
import { CenterWrapper, Txt } from 'components';

export default function NotFound(): JSX.Element {
  return (
    <CenterWrapper bgColor="CARD_BG" borderRadius="s" className="center-items m-2">
      <Txt color="RED" className="text-center my-5 mx-1" size="s" isBold>
        صفحه مورد نظر وجود ندارد
      </Txt>
    </CenterWrapper>
  );
}
