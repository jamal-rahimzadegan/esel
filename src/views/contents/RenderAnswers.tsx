import React, { Fragment, useState } from 'react';
import { ICON_PATH } from 'constant';
import { Btn, Card, CheckBox, Modal, Txt } from 'components';
import { NextBtn } from './ContentStyle';
import TextRenderer from 'views/contents/TextRenderer';

interface Props {
  data: object;
  submitAnswer: Function;
}

export default function RenderAnswers(props: Props): JSX.Element {
  const { data = {}, submitAnswer } = props;
  const [selectedAnswer, setSelectedAnswer] = useState<number | string>(0);
  const [yesNoAnswerText, setYesNoAnswerText] = useState<'yes_Text' | 'no_Text' | ''>('');
  const [showYesNoModal, setShowModal] = useState<boolean>(false);

  const handleQuestionType = (item) => {
    const { answer, titel, q_Text } = item || {};

    const handleYesNoQuestion = (type) => {
      if (data[type]) {
        setYesNoAnswerText(type);
        setSelectedAnswer(answer);
        setShowModal(true);
      } else submitAnswer(answer);
    };

    switch (titel) {
      case 'Next':
        return (
          <NextBtn
            onClick={() => submitAnswer(answer)}
            alt="next"
            height={100}
            width={100}
            src={ICON_PATH + 'next.svg'}
          />
        );
      case 'Yes':
        return (
          <Btn
            width="100px"
            className="ml-5"
            onClick={() => handleYesNoQuestion('yes_Text')}
            hasArrow={false}
            hasIcon={false}
            bgColor="GREEN"
            children="بله"
          />
        );
      case 'No':
        return (
          <Btn
            width="100px"
            onClick={() => handleYesNoQuestion('no_Text')}
            hasArrow={false}
            hasIcon={false}
            bgColor="RED"
            children="خیر"
          />
        );

      default:
        if (titel.includes('Q')) {
          return (
            <CheckBox
              className="px-1"
              isChecked={selectedAnswer === answer}
              label={q_Text}
              onChange={() => {
                setSelectedAnswer(answer);
                submitAnswer(answer);
              }}
            />
          );
        } else return <></>;
    }
  };

  return (
    <Card className="d-flex align-items-center justify-content-between w-100 my-3">
      {/*@ts-ignore*/}
      {data?.questions?.map((item, i) => {
        return item?.answer ? (
          <Fragment key={item?.answer + Math.random() * i}>{handleQuestionType(item)}</Fragment>
        ) : null;
      })}
      <Modal isOpen={showYesNoModal} doOnClose={setShowModal}>
        <TextRenderer data={data} txt={data[yesNoAnswerText]} />
        <NextBtn
          alt="next"
          height={100}
          width={100}
          src={ICON_PATH + 'next.svg'}
          onClick={() => {
            setShowModal(false);
            submitAnswer(selectedAnswer);
          }}
        />
      </Modal>
    </Card>
  );
}
