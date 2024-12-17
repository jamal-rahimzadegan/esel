import React from 'react';
import { Card, Input, Txt } from 'components';
import { InpTypes } from 'types';

interface NewProjectType {
  onChange: Function;
  title: string;
  type?: InpTypes;
  name?: string;
}

export default function InputRow(props: NewProjectType) {
  const { onChange, title, type, name } = props;

  return (
    <Card className="d-flex align-items-center w-100 mt-2">
      <Card
        height="40px"
        width="35%"
        bgColor="BLOCK_BG"
        className="d-flex justify-content-start align-items-center pr-1"
      >
        <Txt numberOfLines="1" className="d-block text-nowrap" size="xs">
          {title}
        </Txt>
      </Card>
      <Card height="40px" width="65%" bgColor="INPUT_BG">
        <Input
          name={name}
          type={type || 'text'}
          onChange={onChange}
          placeholder={title}
          wrapperClassName="w-100 h-100 d-flex align-items-center"
          className="p-1 w-100 h-100"
        />
      </Card>
    </Card>
  );
}
