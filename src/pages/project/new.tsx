import React, { memo } from 'react';
import NewProject from 'views/projects/new/NewProject';
import { HtmlHead } from 'components/index';

export default function NewProjectPage() {
  return (
    <>
      <HtmlHead description="پروژه جدید" title="پروژه جدید" />
      <NewProject />
    </>
  );
}
