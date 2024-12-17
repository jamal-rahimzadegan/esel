import React, { useEffect, useState } from 'react';
import { useHitAction } from 'hooks';
import { ComplexObject } from 'types';
import { generateFileUrl, replaceMultiStr } from 'utils';
import createAction, { actions } from 'store/actions';
import { Btn, Card, CenterWrapper, HyperLink, Txt } from 'components';
import { ItemsContainer } from './FieldStyle';

export default function Field(): JSX.Element {
  const hitAction = useHitAction();
  const [fields, setFields] = useState<ComplexObject[]>([]);

  const fetchFields = () => {
    hitAction(
      createAction(actions.WATCH_GET_LEVELS, {
        level: 0,
        cb: setFields,
        isQuick: false,
      })
    );
  };

  useEffect(fetchFields, []);

  return (
    <CenterWrapper>
      <Card className="d-flex flex-column align-items-start p-2">
        <Card className="d-flex align-items-center my-2">
          <Txt isBold size="s">
            در کدامیک از گرایشهای زیر فعالیت می کنید؟
          </Txt>
        </Card>
        <ItemsContainer>
          {fields.map(({ name, id, icon }) => (
            <HyperLink key={id} href={`/responsibilities/${id}/${replaceMultiStr(name, ' ', '-')}`}>
              <Btn
                iconSize="35px"
                textColor="BLACK"
                width="100%"
                childWrapperClass="px-2"
                bgColor="APP"
                className="my-2"
                textSize="xxs"
                iconSrc={generateFileUrl(icon?.replace('icons/', ''), 'icons')}
              >
                {name}
              </Btn>
            </HyperLink>
          ))}
        </ItemsContainer>
      </Card>
    </CenterWrapper>
  );
}
