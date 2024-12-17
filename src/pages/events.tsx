import React from 'react';
import { HtmlHead } from 'components/index';
import CalenderNote from 'views/calender-note/CalenderNote';

export default function EventsPage() {
  return (
    <>
      <HtmlHead description="یادداشت" title="یادداشت‌ها" />
      <CalenderNote isList={true} />
    </>
  );
}
