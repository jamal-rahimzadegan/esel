import React from 'react';
import { HtmlHead } from 'components/index';
import dynamic from 'next/dynamic';

const AboutUs = dynamic(() => import('views/about-us/AboutUs'));

export default function AboutUsPage() {
  return (
    <>
      <HtmlHead description="درباره ما" title="درباره اشل" />
      <AboutUs />
    </>
  );
}
