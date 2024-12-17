import React from 'react';
import { Spinner, Txt } from 'components';

interface ListWrapperProps {
  status: 'idle' | 'error' | 'loading' | 'success';
  children?: React.ReactNode;
  errMsg?: string;
  emptyMsg?: string;
}

export default function ListRenderer(props: ListWrapperProps): JSX.Element {
  const { children, errMsg, emptyMsg, status } = props;

  const Msg = ({ content }) => {
    return (
      <Txt size="xxs" isBold className="my-2 w-100 text-center">
        {content}
      </Txt>
    );
  };

  switch (status) {
    case 'loading':
      return <Spinner size={25} className="mx-auto" />;
    case 'error':
      return <Msg content={errMsg ?? ''} />;
    case 'success':
      return <>{children}</>;
    default:
      return <Msg content={emptyMsg ?? 'موردی وجود ندارد'} />;
  }
}
