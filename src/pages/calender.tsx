import React from 'react';
import { HtmlHead } from 'components/index';
import dynamic from 'next/dynamic';

const CalenderNote = dynamic(() => import('views/calender-note/CalenderNote'));

export default function CalenderPage() {
  return (
    <>
      <HtmlHead description="تقویم" title="تقویم و یادداشت" />
      <CalenderNote isList={false} />
    </>
  );
}
