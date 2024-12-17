import React from 'react';
import { HtmlHead } from 'components/index';
import Channels from 'views/channels/Channels';

export default function TelegramChannels() {
  return (
    <>
      <HtmlHead description="Telegram Channels" title="اشل در استان ها" />
      <Channels />
    </>
  );
}
