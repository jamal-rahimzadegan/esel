import React, { useState } from 'react';
import { Txt, Image, SVG, Card } from 'components';
import { ComplexObject } from 'types';
import { ItemText, SecondLevelWrapper } from './ContentSelectorStyle';
import RenderThirdLevel from './RenderThirdLevel';
import { StepType } from 'components/common/content-slector/ContentSelector';
import { generateFileUrl } from 'utils/index';

interface Props {
  levelTwoData: ComplexObject[];
  title: string;
  levelOneId: string;
  getOtherLevelItems: (level: 2 | 3, id: string, parentId: string) => void;
  step: StepType;
}

export default function RenderSecondLevel(props: Props) {
  const { levelTwoData, title, levelOneId, getOtherLevelItems, step } = props;
  const [secondLevelID, setSecondLevelID] = useState<string>('');

  const pickItem = async (parentId, id) => {
    getOtherLevelItems(3, id, parentId);
    secondLevelID !== id ? setSecondLevelID(id) : setSecondLevelID('');
  };

  return (
    <SecondLevelWrapper className="pb-2 mt-3" id={'child' + levelOneId}>
      <Txt size="xs" className="mt-5 pt-2 mb-1 mx-2" isBold>
        {!levelTwoData.length ? 'لطفا صبر کنید' : title}
      </Txt>
      {levelTwoData.map((item, i) => (
        <Card key={item.name} className="w-100 d-flex flex-column align-items-center">
          <ItemText onClick={() => pickItem(levelOneId, item.id)} i={i} size="xs" align="start">
            {item.icon ? (
              <Image src={generateFileUrl(item.icon?.replace('icons', ''), 'icons')} height={30} width={30} alt="" />
            ) : null}
            {item.name}
          </ItemText>
          {secondLevelID === item.id ? (
            <RenderThirdLevel step={step} getOtherLevelItems={getOtherLevelItems} secLevelItem={item} />
          ) : null}
        </Card>
      ))}
    </SecondLevelWrapper>
  );
}
