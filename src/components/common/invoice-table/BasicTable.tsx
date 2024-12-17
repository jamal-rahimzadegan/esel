import React from 'react';
import { Input } from 'components/index';
import { TableStyle, TD, TH, TR } from './BasicTableStyle';

interface BasicTableProps {
  isInvoice: boolean;
  data: any;
  editInput: Function;
  goToNextInput: Function;
}

export default function BasicTable(props: BasicTableProps): JSX.Element {
  const { data, editInput, goToNextInput } = props;

  const headerLabels = Object.keys(data[0]);

  return (
    <TableStyle {...props}>
      <thead>
        <TR>
          {headerLabels.map((el, i) => (
            <TH key={i} i={i}>
              {i === 0 ? '' : el}
            </TH>
          ))}
        </TR>
      </thead>
      <tbody>
        {data.map((data, i) => (
          <TR key={i}>
            {Object.values(data).map((el, j) => {
              let id = 1000 + i;
              return (
                <TD key={j} i={i}>
                  {
                    <Input
                      name="basic-table"
                      autocomplete="off"
                      onEnterPress={() => goToNextInput(id + 1 + '')}
                      id={id.toString()}
                      className="w-100 h-100 p-1"
                      onChange={(e) => editInput(data.id - 1, headerLabels[i], e.target.value)}
                      bgColor="TRANSPARENT"
                      disabled={i === 0}
                      placeholder={i === 0 ? data.id : ''}
                    />
                  }
                </TD>
              );
            })}
          </TR>
        ))}
      </tbody>
    </TableStyle>
  );
}
