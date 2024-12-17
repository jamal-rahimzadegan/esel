import React from 'react';
import { HtmlHead } from 'components/index';
import Present from 'views/present/Present';

export default function PresentPage() {
  return (
    <>
      <HtmlHead description="معرفی اپ" title="معرفی اپ" />
      <Present />
    </>
  );
}
