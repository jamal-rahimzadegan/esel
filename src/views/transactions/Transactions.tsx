import React from 'react';
import { useRouter } from 'next/router';
import { CenterWrapper, EmptyContent } from 'components';

interface TransactionListProps {}

export default function TransactionList(props: TransactionListProps): JSX.Element {
  const router = useRouter();

  return (
    <CenterWrapper>
      <EmptyContent />
    </CenterWrapper>
  );
}
