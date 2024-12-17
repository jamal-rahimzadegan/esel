import React from 'react';
import { HtmlHead } from 'components/index';
import dynamic from 'next/dynamic';
const QuickAccess = dynamic(() => import('views/quick-access/QuickAccess'));

export default function QuickAccessPage() {
  return (
    <>
      <HtmlHead title="دسترسی سریع" description="دسترسی سریع به قسمت های پر کاربرد" />
      <QuickAccess />
    </>
  );
}
