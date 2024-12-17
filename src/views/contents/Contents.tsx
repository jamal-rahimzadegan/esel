import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useHitAction } from 'hooks';
import { ComplexObject } from 'types';
import { IMG_PATH } from 'constant';
import createAction, { actions } from 'store/actions';
import { Card, CenterWrapper, Circle, Image } from 'components';
import Advertise from 'views/advertise/Advertise';
import { ContentContainer } from './ContentStyle';
import RenderCheckList from './RenderCheckList';
import RenderAnswers from './RenderAnswers';
import TextRenderer from './TextRenderer';

export default function Contents(): JSX.Element {
  const hitAction = useHitAction();
  const router = useRouter();
  const { chapter, id, step, slug } = router.query;
  const [checkLists, setCheckLists] = useState<any[]>([]);
  const [content, setContent] = useState<ComplexObject>({});
  const isCheckList = !!content?.text?.includes('ch');

  const grabContent = () => {
    hitAction(
      createAction(actions.GET_CONTENT, {
        isQuick: step === 'quick',
        chapterId: +chapter,
        contentId: +id,
        cb: setContent,
      })
    );
  };

  const callCheckList = () => {
    hitAction(
      createAction(actions.GET_CHECK_LIST, {
        name: content.text,
        cb: setCheckLists,
      })
    );
  };

  const submitAnswer = (nextContentID) => {
    return router.push({
      pathname: '/content/[step]/[chapter]/[id]/[slug]',
      query: { step, chapter, id: nextContentID, slug },
    });
  };

  useEffect(grabContent, [chapter, id]);

  useEffect(() => {
    if (isCheckList) callCheckList();
  }, [isCheckList]);

  return (
    <>
      <CenterWrapper>
        <Card className="center-items flex-column py-2">
          <Circle className="center-items" title="محتوا" hasIcon={false} />
          <ContentContainer bgColor="CARD_BG" hasBorder>
            {content?.text ? (
              <Image className="content-logo" src={IMG_PATH + 'logo.png'} alt="logo" height="160px" width="160px" />
            ) : null}
            {isCheckList ? <RenderCheckList data={checkLists} /> : <TextRenderer data={content} />}
          </ContentContainer>
        </Card>
        <RenderAnswers data={content} submitAnswer={submitAnswer} />
      </CenterWrapper>
      <Advertise page="InnerPage" />
    </>
  );
}
