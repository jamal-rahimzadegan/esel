import React from 'react';
import { HtmlHead } from 'components/index';
import User from 'views/user';

export default function UserPage() {
  return (
    <>
      <HtmlHead description="404 page" title="به اشل خوش آمدید" />
      <User />
    </>
  );
}
