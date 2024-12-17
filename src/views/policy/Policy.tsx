import React from 'react';
import { ICON_PATH, TEXTS } from 'constant';
import { Card, CenterWrapper, Circle, TriangleCard, Txt } from 'components';

export default function Policy() {
  return (
    <CenterWrapper>
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <Circle title="قوانین اشل" icon={ICON_PATH + 'open-envelope.svg'} iconSize="60px" />
        <TriangleCard hasBorder bgColor="CARD_BG" className="my-0 w-100 h-100 p-4">
          <Txt size="xs" className="text-justify">
            {TEXTS.POLICIES}
          </Txt>
        </TriangleCard>
      </Card>
    </CenterWrapper>
  );
}
