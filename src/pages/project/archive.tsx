import React from 'react';
import { HtmlHead } from 'components/index';
import ArchiveProject from 'views/projects/archive/ArchiveProject';

export default function ArchiveProjectPage() {
  return (
    <>
      <HtmlHead description="آرشیو پروژه" title="آرشیو پروژه" />
      <ArchiveProject />
    </>
  );
}
