import React from 'react';
import MsgBox from 'views/msg-box/MsgBox';
import { HtmlHead } from 'components/index';

export default function MsgBoxPage() {
  return (
    <>
      <HtmlHead title="ارتباط با ما" description="msg box" />
      <MsgBox />
    </>
  );
}
