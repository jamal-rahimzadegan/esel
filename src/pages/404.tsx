import React from 'react';
import NotFound from 'components/core/Notify/NotFound';
import { HtmlHead } from 'components/index';
import { ROUTES } from 'constant';

export default function NotFoundPage() {
  const { title, desc } = ROUTES.notFound;
  return (
    <>
      <HtmlHead description={desc} title={title} />
      <NotFound />
    </>
  );
}
