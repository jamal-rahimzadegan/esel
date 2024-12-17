import React from 'react';
import { HtmlHead } from 'components/index';
import Login from 'views/user/login/Login';

export default function LoginPage() {
  return (
    <>
      <HtmlHead description="login page" title="ورود به اشل" />
      <Login />
    </>
  );
}
