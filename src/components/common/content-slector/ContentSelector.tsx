import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { useHitAction } from 'hooks';
import { ComplexObject } from 'types';
import createAction, { actions } from 'store/actions';
import { Btn, CenterWrapper, ListRenderer } from 'components';
import { FirstLevelWrapper, ItemContainer } from './ContentSelectorStyle';
import RenderSecondLevel from './RenderSecondLevel';
import { generateFileUrl } from 'utils/index';

export type StepType = 'quick' | 'all';

interface Props {
  step: StepType;
  id?: string; // when coming from all
}

export default function ContentSelector(props: Props) {
  const { step, id } = props;
  const [data, setData] = useState<ComplexObject[]>([]);
  const [selectedId, setSelectedId] = useState<string>('');
  const hitAction = useHitAction();
  const isQuick = step === 'quick';

  const getFirstLevelItems = () => {
    hitAction(
      createAction(actions.WATCH_GET_LEVELS, {
        level: 1,
        id: isQuick ? 0 : id,
        cb: setData,
        isQuick,
      })
    );
  };

  const getNextLevels = (level: 2 | 3, id: string, parentId?: string) => {
    hitAction(
      createAction(actions.WATCH_GET_LEVELS, {
        level,
        data,
        id,
        parentId,
        isQuick,
        cb: setData,
      })
    );
  };

  const toggleChild = (type, id) => {
    anime({
      targets: '#child' + id,
      width: type === 'open' ? [0, '200px'] : ['200px', 0],
      duration: 400,
    });
  };

  const pickLevelOneItem = async (id) => {
    await getNextLevels(2, id);

    if (selectedId !== id) {
      await setSelectedId(id);
      toggleChild('open', id);
    } else {
      await setSelectedId('');
      toggleChild('close', id);
    }
  };

  useEffect(getFirstLevelItems, []);

  return (
    <CenterWrapper>
      <FirstLevelWrapper>
        <ListRenderer status={data?.length ? 'success' : 'error'}>
          {data.map((item) => (
            <ItemContainer key={item.id} id={'btn' + item.id} isOpen={selectedId === item.id}>
              <Btn
                onClick={() => pickLevelOneItem(item.id)}
                isHome
                iconSize="40px"
                iconSrc={item.icon}
                hasIcon={!!item?.icon}
                textColor="BLACK"
                className="parent-btn"
                childWrapperClass="px-2 small"
                bgColor="APP"
              >
                {item.name}
              </Btn>
              {selectedId === item.id ? (
                <RenderSecondLevel
                  step={step}
                  getOtherLevelItems={getNextLevels}
                  levelOneId={item.id}
                  title={item.name}
                  levelTwoData={item.children}
                />
              ) : null}
            </ItemContainer>
          ))}
        </ListRenderer>
      </FirstLevelWrapper>
    </CenterWrapper>
  );
}
