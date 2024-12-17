import React from 'react';
import { HtmlHead } from 'components/index';
import Order from 'views/contents/Order';

export default function ContentPage() {
  return (
    <>
      <HtmlHead description="دستور کار" title="دستور کار" />
      <Order />
    </>
  );
}
