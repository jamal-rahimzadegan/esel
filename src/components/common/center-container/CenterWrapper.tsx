import React, { ReactNode } from 'react';
import { Card } from 'components';

interface Props extends React.ComponentProps<typeof Card> {
  children: ReactNode;
  id?: string;
  contentClass?: string;
  className?: string;
}

export default function CenterWrapper(props: Props): JSX.Element {
  const { children, id, contentClass, className, ...restProps } = props;

  return (
    <Card id={id} className={'d-flex flex-column ' + className}>
      <Card
        className={'col-xl-5 col-lg-6 col-md-7 col-sm-9 col-11 align-self-center px-2 ' + contentClass}
        {...restProps}
      >
        {children}
      </Card>
    </Card>
  );
}
