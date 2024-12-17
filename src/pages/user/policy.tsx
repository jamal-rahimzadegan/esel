import React from 'react';
import Policy from 'views/policy/Policy';
import { HtmlHead } from 'components/index';

export default function PolicyPage() {
  return (
    <>
      <HtmlHead description="policy" title="قوانین و مقررات اشل" />
      <Policy />
    </>
  );
}
