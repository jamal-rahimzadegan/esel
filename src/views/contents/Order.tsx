import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useHitAction } from 'hooks';
import { Btn, Card, CenterWrapper, Circle, EmptyContent, RadioForm, TriangleCard, Txt } from 'components';
import createAction, { actions } from 'store/actions';

export type OrderAnswerType = { id: number; answerId: number }[];

export default function Order(): JSX.Element {
  const { order } = useRouter().query;
  const hitAction = useHitAction();
  const [data, setData] = useState<any[]>([]);
  const [answers, setAnswers] = useState<OrderAnswerType>([]);

  const fetchOrder = () => {
    hitAction(
      createAction(actions.GET_ORDER, {
        order,
        setData,
      })
    );
  };

  const answerQuestion = (answerID, questionID) => {
    let tempAnswers = [...answers];
    let target = tempAnswers.find((el) => el.id === questionID);

    if (target) {
      // update the answer if the answer for a specific question has been changed
      target.answerId !== answerID && tempAnswers.forEach((el) => (el.answerId = answerID));
    } else tempAnswers.push({ id: +questionID, answerId: +answerID });

    setAnswers(tempAnswers);
  };

  const downloadPDF = () => {
    hitAction(
      createAction(actions.DOWNLOAD_PDF_ORDER, {
        name: order,
        items: answers,
      })
    );
  };

  useEffect(fetchOrder, [order]);

  return (
    <CenterWrapper>
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2 my-3">
        <Circle className="center-items" title="دستور کار" hasIcon={false} />
        <TriangleCard hasBorder bgColor="CARD_BG" className="my-0 w-100 h-100 p-3">
          {data?.length ? (
            <>
              {data.map((item, i) => (
                <Card key={item.id} className="mb-2 mt-5">
                  <Txt align="justify" isBold size="s">
                    {i + 1}- {item.name}
                  </Txt>
                  <RadioForm
                    data={item.questions.map((q) => ({ id: q.id, label: q.question, value: q.response }))}
                    cb={(ans) => answerQuestion(ans.id, item.id)}
                  />
                </Card>
              ))}
              <Btn
                bgColor="APP"
                textColor="BLACK"
                className="my-4"
                childWrapperClass="px-3"
                hasIcon={false}
                onClick={downloadPDF}
              >
                دانلود نمونه دستور کار
              </Btn>
            </>
          ) : (
            <EmptyContent />
          )}
        </TriangleCard>
      </Card>
    </CenterWrapper>
  );
}
