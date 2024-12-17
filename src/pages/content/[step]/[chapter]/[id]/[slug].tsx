import React from 'react';
import { HtmlHead } from 'components/index';
import Contents from 'views/contents/Contents';

export default function ContentPage() {
  return (
    <>
      <HtmlHead description="محتوای سایت" title="محتوا" />
      <Contents />
    </>
  );
}
