import { Card, CheckBox, Txt } from 'components';
import React, { Fragment } from 'react';
import TextRenderer from 'views/contents/TextRenderer';

interface Props {
  data: any[];
}

export default function RenderCheckList(props: Props): JSX.Element {
  const { data } = props;

  return (
    <>
      {data.map((parent) => (
        <Fragment key={parent.name}>
          <Txt size="m" isBold className="mb-4">
            {parent.name}
          </Txt>
          {parent.checkListItem.map((item) => (
            <Fragment key={item.name}>
              <Card className="d-flex align-items-start">
                <CheckBox className="font-weight-bold" onChange={() => {}} label="" canSelect={!item?.items?.length} />
                <TextRenderer txt={item.name} />
              </Card>
              <Card className="mb-5">
                {item?.items?.map((el) => (
                  <Fragment key={el}>
                    <Card className="d-flex align-items-start">
                      <CheckBox labelSize="xxs" onChange={() => {}} label="" />
                      <TextRenderer txt={el} />
                    </Card>
                  </Fragment>
                ))}
              </Card>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
}
