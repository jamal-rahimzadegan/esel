import React from 'react';
import { Card, Image, Txt } from 'components';
import { ICON_PATH } from 'constant';

interface TitleRowType {
  src: string;
  title: string;
  className?: string;
}

export default function TitleRow(props: TitleRowType) {
  const { src, title, className } = props;

  return (
    <Card className={'d-flex align-items-center ' + className}>
      <Image src={ICON_PATH + src} width="20px" height="20px" alt={title} objectFit="cover" className="ml-1" />
      <Txt size="s" isBold className="d-block text-center title-font">
        {title}
      </Txt>
    </Card>
  );
}
