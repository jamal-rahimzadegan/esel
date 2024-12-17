import React from 'react';
import BasicTable from './BasicTable';

type InvoiceTableType = {
  data: object[];
  setData: Function;
};

export default function InvoiceTable(props: InvoiceTableType): JSX.Element {
  const { data, setData } = props;

  const editInput = (i, target, value) => {
    let newData = data;
    newData[i][target] = value;
    setData(newData);
  };

  return <BasicTable goToNextInput={() => {}} data={data} editInput={editInput} isInvoice={false} />;
}
