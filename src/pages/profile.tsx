import React from 'react';
import { HtmlHead } from 'components/index';
import Profile from 'views/profile/Profile';

export default function ProfilePage() {
  return (
    <>
      <HtmlHead description="Profile" title="حساب کاربری" />
      <Profile />
    </>
  );
}
