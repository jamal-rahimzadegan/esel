import React from 'react';
import { useRouter } from 'next/router';
import { ContentSelector, Txt } from 'components';

export default function Responsibilities() {
  const { query } = useRouter();

  return (
    <>
      <Txt className="text-center my-3" isBold size="s">
        کدامیک از مسئولیت‌های زیر را به عهده دارید؟
      </Txt>
      <ContentSelector step="all" id={query.id?.toString()} />
    </>
  );
}
