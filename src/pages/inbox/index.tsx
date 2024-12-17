import React from 'react';
import { HtmlHead } from 'components/index';
import Inbox from 'views/inbox/Inbox';

export default function InboxPage() {
  return (
    <>
      <HtmlHead title="صندوق ورودی" description="inbox" />
      <Inbox />
    </>
  );
}
