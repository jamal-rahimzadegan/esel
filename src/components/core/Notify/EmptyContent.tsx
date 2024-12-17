import React from 'react';
import { Txt } from 'components';

interface EmptyContentProps {
  className?: string;
  height?: string;
  width?: string;
  msg?: string;
}

export default function EmptyContent(props: EmptyContentProps): JSX.Element {
  const { height = '100%', width = '100%', className, msg } = props;
  return (
    <Txt size="s" className={`text-center my-4 font-weight-bold ${className}`}>
      {msg ?? 'موردی وجود ندارد'}
    </Txt>
  );
}
