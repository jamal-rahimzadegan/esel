import React from 'react';
import { HtmlHead } from 'components/index';
import TransactionList from 'views/transactions/Transactions';

export default function Transactions() {
  return (
    <>
      <HtmlHead description="Transactions" title="سوابق پرداخت" />
      <TransactionList />
    </>
  );
}
