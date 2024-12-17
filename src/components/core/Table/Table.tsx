import React from 'react';
import { ComplexObject } from 'types/index';
import { TableStyle, TD, TH, TR } from './TableStyle';

interface TableProps {
  body: ComplexObject[];
  header: string[];
}

export default function Table(props: TableProps): JSX.Element {
  const { body, header } = props;

  const headerLabels: string[] = header.length ? header : Object.keys(body[0]);

  const THead = () => (
    <thead>
      {headerLabels.map((item, i) => (
        <TH key={i} i={i}>
          {item}
        </TH>
      ))}
    </thead>
  );

  const TBody = () => (
    <tbody>
      {body.map((item, i) => (
        <TR key={item.id}>
          {Object.values(item).map((el, j) => (
            <TD key={el.id} i={j}>
              {el}
            </TD>
          ))}
        </TR>
      ))}
    </tbody>
  );

  return (
    <TableStyle {...props}>
      <THead />
      <TBody />
    </TableStyle>
  );
}
