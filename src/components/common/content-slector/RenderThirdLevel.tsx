import React from 'react';
import { ComplexObject } from 'types';
import { replaceMultiStr } from 'utils';
import { Card, HyperLink, Image } from 'components';
import { ItemText } from './ContentSelectorStyle';

export default function RenderThirdLevel({ secLevelItem, step }: ComplexObject) {
  return (
    <Card className="w-100 text-center pr-3 overflow-hidden pointer mb-3">
      {secLevelItem?.children.map((item, i) => (
        <HyperLink
          key={item.name}
          href={`/content/${step}/${secLevelItem.id}/${item.id}/${replaceMultiStr(item.name, ' ', '-')}`}
        >
          <ItemText i={i} className="m-1 p-1" bgColor="BLOCK_BG" size="xxs" isBold>
            {item?.icon ? <Image src={item.icon} height={20} width={20} alt={item.name} className="ml-1" /> : null}
            {item.name}
          </ItemText>
        </HyperLink>
      ))}
    </Card>
  );
}
