import React from 'react';
import { HtmlHead } from 'components/index';
import TicketDetails from 'views/inbox/TicketDetails';

export default function TicketDetailsPage() {
  return (
    <>
      <HtmlHead title="جزئیات تیکت" description="ticket details" />
      <TicketDetails />
    </>
  );
}
