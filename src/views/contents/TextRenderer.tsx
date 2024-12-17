import React from 'react';
import { Txt } from 'components';
import { reverseStr } from 'utils';
import { FILES_BASE_URL, REGEX } from 'constant';

interface Props {
  data?: any;
  txt?: string;
}

export default function TextRenderer(props: Props): JSX.Element {
  const { data, txt } = props;
  let contentText = txt || data?.text || '';

  const renderTextWithLink = (matchedRoute:string):string => {
    let newRoute = '';
    matchedRoute.replace(REGEX.STR_BETWEEN_CURLY_BRACES, (match) => (newRoute = match));

    if (matchedRoute.includes('D')) {
      return `<a target='_blank' style='text-decoration: none; color: blue' href="${window.location.origin}/content/order/${newRoute}"> نمونه </a>`;
      // eg: http://localhost:2002/content/quick/96/26400000/slug
    } else {
      newRoute = reverseStr(newRoute, '-'); // reverse text
      return `<a target='_blank' style='text-decoration: none; color: blue' href="${FILES_BASE_URL}pdfs/${newRoute}.pdf"  download=${matchedRoute}.pdf> نمونه </a>`;
      // eg: http://localhost:2002/content/quick/93/800000/ارجاع-کار-به-مهندس-ناظر
    }
  };

  return (
    <Txt
      size="xs"
      dangerouslySetInnerHTML={{
        __html: contentText.replace(REGEX.STR_AND_CURLY_BRACES, renderTextWithLink),
      }}
    />
  );
}
