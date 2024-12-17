import React from 'react';
import { HtmlHead } from 'components/index';
import Tools from 'views/tools/Tools';

export default function ToolsPage() {
  return (
    <>
      <HtmlHead description="tools" title="ابزارها" />
      <Tools />
    </>
  );
}
