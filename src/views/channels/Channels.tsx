import React from 'react';
import { ICON_PATH, TEXTS, TELEGRAM_CHANNELS } from 'constant';
import { CenterWrapper, Circle, HyperLink, Txt, TriangleCard, Card, Btn } from 'components';
import { ContractorImg } from 'views/msg-box/MsgBoxStyle';

export default function Channels(): JSX.Element {
  return (
    <CenterWrapper>
      <Card className="center-items flex-column">
        <Circle className="center-items text-center" title="کانال های تلگرام استان ها" hasIcon={false} />
        <TriangleCard bgColor="CARD_BG" hasBorder className="p-4 mb-4 text-justify">
          <Txt size="s">{TEXTS.TELEGRAM_MSG}</Txt>
          <Card className="d-flex w-100 flex-column py-4 px-5">
            {TELEGRAM_CHANNELS.map((ch, i) => (
              <HyperLink key={ch.city} className="my-1" href={'https://' + ch.link}>
                <Btn bgColor="APP" hasIcon={false} textColor="BLACK" childWrapperClass="px-3">
                  {ch.city}
                </Btn>
              </HyperLink>
            ))}
          </Card>
        </TriangleCard>
        <ContractorImg src={ICON_PATH + 'contractor.svg'} alt="logo" width="150px" />
      </Card>
    </CenterWrapper>
  );
}
