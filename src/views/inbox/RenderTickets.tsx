import React from 'react';
import { useRouter } from 'next/router';
import { ComplexObject } from 'types';
import { Card, EmptyContent, Txt } from 'components';

interface Props {
  tickets: ComplexObject[];
  clickAble?: boolean;
}

export default function RenderTickets(props: Props): JSX.Element {
  const { tickets = [], clickAble } = props;
  const router = useRouter();

  const handleClick = (id) => (clickAble ? router.push(`/inbox/${id}`) : null);

  return (
    <>
      {tickets?.length ? (
        tickets.map((item, i) => (
          <Card
            key={item.tiketID}
            className="p-2 rounded my-1 border-bottom pointer"
            onClick={() => handleClick(item.tiketID)}
          >
            <Txt size="xs" isBold>
              {item?.text}
            </Txt>
            <Card className="center-items justify-content-between mt-1 px-1">
              {/*<Txt size="xxs">وضعیت: {item.status || 'در حال بررسی'}</Txt>*/}
              <Txt size="xxs">
                {new Date(item.createdon)?.toLocaleTimeString('fa', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Txt>
            </Card>
            <Card></Card>
          </Card>
        ))
      ) : (
        <EmptyContent msg="پیامی وجود ندارد" />
      )}
    </>
  );
}
