import React from 'react';
import { ICON_PATH, TEXTS } from 'constant/index';
import { Card, CenterWrapper, Circle, HtmlHead, Txt, TriangleCard } from 'components/index';

export default function WhyEsel() {
  return (
    <>
      <HtmlHead description="why-esel" title="چرا اشل" />
      <CenterWrapper>
        <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
          <Circle title="چرا اشل" icon={ICON_PATH + 'open-envelope.svg'} iconSize="60px" />
          <TriangleCard hasBorder bgColor="CARD_BG" className="my-0 w-100 h-100 p-4">
            <Txt size="xs" className="text-justify">
              {TEXTS.WHY_ESEL}
            </Txt>
          </TriangleCard>
        </Card>
      </CenterWrapper>
    </>
  );
}
