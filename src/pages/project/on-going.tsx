import React from 'react';
import { HtmlHead } from 'components/index';
import OnGoingProject from 'views/projects/on-going/OnGoingProject';

export default function NewProjectPage() {
  return (
    <>
      <HtmlHead description="پروژه جاری" title="پروژه جاری" />
      <OnGoingProject />
    </>
  );
}
