import React, { useEffect, useState } from 'react';
import { ComplexObject } from 'types';
import { useHitAction } from 'hooks';
import { ICON_PATH } from 'constant';
import createAction, { actions } from 'store/actions';
import { CenterWrapper, Circle, TriangleCard } from 'components';
import RenderTickets from 'views/inbox/RenderTickets';

export default function Inbox(): JSX.Element {
  const hitAction = useHitAction();
  const [tickets, setTickets] = useState<ComplexObject[]>([]);

  const getTickets = () => {
    hitAction(createAction(actions.GET_TICKET, { cb: setTickets }));
  };

  useEffect(getTickets, []);

  return (
    <CenterWrapper>
      <div className="d-flex flex-column align-items-center py-2">
        <Circle title="پیام ها" icon={ICON_PATH + 'open-envelope.svg'} iconSize="60px" />
        <TriangleCard hasBorder bgColor="CARD_BG" className="my-0 w-100 h-100 p-4">
          <RenderTickets tickets={tickets} clickAble />
        </TriangleCard>
      </div>
    </CenterWrapper>
  );
}
