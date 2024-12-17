import React, { ReactNode } from 'react';
import Head from 'next/head';
import { LIGHT_THEME } from 'assets/style/theme';

interface Props {
  title: string;
  noIndex?: boolean;
  canonical?: boolean;
  description: string;
  keywords?: string[];
  children?: ReactNode;
}

const DEFAULT_KEYWORDS = ['اشل', 'ساختمان', 'معاری', 'عمران'];

export default function HtmlHead(props: Props): JSX.Element {
  const { title, noIndex, canonical, description, keywords = DEFAULT_KEYWORDS, children } = props;

  const setKeywords = () => {
    let temp = '';
    keywords.forEach((el, i) => (temp += el + (i + 1 === keywords.length ? '' : ', ')));
    return temp;
  };

  return (
    <Head>
      <title>{title || 'اشل'}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={setKeywords()} />
      {/*----for sharing the app url on social medias (op=open graph)--------*/}
      <meta property="og:title" content="اپلیکیشن اشل" />
      <meta property="og:description" content="جامع ترین مرجع اطلاعات و قوانین نظارت ساختمان" />
      <meta property="og:image" content="https://www.google.com" />
      {/*<meta name="enamad" levels="250658" />*/}
      <meta name="theme-color" content={LIGHT_THEME.APP} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="msapplication-navbutton-color" content={LIGHT_THEME.APP} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {/*{!!noIndex && !!canonical ? <meta name="robots" levels="index, follow" /> : null}*/}
      {children}
    </Head>
  );
}
