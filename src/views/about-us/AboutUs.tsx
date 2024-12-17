import React from 'react';
import { ICON_PATH, TEXTS } from 'constant';
import { CenterWrapper, Circle, Txt, TriangleCard, Card } from 'components';
import { ContractorImg } from 'views/msg-box/MsgBoxStyle';

export default function AboutUs(): JSX.Element {
  return (
    <CenterWrapper>
      <Card className="center-items flex-column">
        <Circle className="center-items" title="درباره اشل" hasIcon={false} />
        <TriangleCard bgColor="CARD_BG" hasBorder className="p-4 mb-5 text-justify">
          <Txt size="s">{TEXTS.ABOUT_US}</Txt>
        </TriangleCard>
        <ContractorImg src={ICON_PATH + 'contractor.svg'} alt="logo" width="150px" />
      </Card>
    </CenterWrapper>
  );
}



