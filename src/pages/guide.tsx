import React from 'react';
import { HtmlHead } from 'components/index';
import Guide from 'views/guide/Guide';

export default function GuidePage() {
  return (
    <>
      <HtmlHead description="guide page" title="راهنمای استفاده از اشل" />
      <Guide />
    </>
  );
}
