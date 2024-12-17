import React from 'react';
import { HtmlHead } from 'components/index';
import Responsibilities from 'views/responsibilities/Responsibilities';

export default function ResponsibilitiesPage() {
  return (
    <>
      <HtmlHead description="Responsibilities page" title="مسئولیت‌ها" />
      <Responsibilities />
    </>
  );
}
