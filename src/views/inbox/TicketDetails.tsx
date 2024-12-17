import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import createAction, { actions } from 'store/actions';
import { useHitAction } from 'hooks';
import { ComplexObject } from 'types';
import { Card, CenterWrapper } from 'components';
import RenderTickets from 'views/inbox/RenderTickets';

export default function TicketDetails(): JSX.Element {
  const router = useRouter();
  const hitAction = useHitAction();
  const [details, setDetails] = useState<ComplexObject[]>([{}]);

  const getTicketDetails = () => {
    hitAction(createAction(actions.GET_TICKET_DETAILS, { ticketID: router.query['ticket-id'], cb: setDetails }));
  };

  useEffect(getTicketDetails, []);

  return (
    <CenterWrapper>
      <Card bgColor="CARD_BG" className="p-3 my-2 rounded">
        <RenderTickets tickets={details} />
      </Card>
    </CenterWrapper>
  );
}
