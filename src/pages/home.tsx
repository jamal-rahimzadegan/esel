import React from 'react';
import { HtmlHead } from 'components';
import { ROUTES } from 'constant';
import Home from 'views/home/Home';

export default function HomePage() {
  const { title, desc } = ROUTES.home;

  return (
    <>
      <HtmlHead title={title} description={desc} />
      <Home />
    </>
  );
}
