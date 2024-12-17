import React, { useState } from 'react';
import { useHitAction } from 'hooks';
import { ComplexObject } from 'types';
import { showAlert } from 'utils';
import { Btn, CalenderBox, Card, CenterWrapper, Input, Txt } from 'components';
import manageNote from 'views/calender-note/manage-note';

interface CalenderNoteProps {
  isList: boolean;
}

type NoteDateType = { day: string; month: string; year: string } | null;

export default function CalenderNote(props: CalenderNoteProps): JSX.Element {
  const { isList } = props;
  const hitAction = useHitAction();
  const [date, setDate] = useState<NoteDateType>(null);
  const [eventToShow, setEventToShow] = useState<[]>([]);
  const [note, setNote] = useState<string>('');
  const isEnteredNoteCorrectly = !!note && !!date?.day;

  const saveNote = () => {
    if (isEnteredNoteCorrectly) {
      manageNote('set', { note, date });
      hitAction(showAlert('success', 'یادداشت شما ذخیره شد'));
    } else hitAction(showAlert('info', 'لطفا روز را انتخاب و پیام را وارد کنید'));
  };

  const pickDay = (selectedDate) => {
    const { day, month, year } = selectedDate;
    setDate(selectedDate);

    if (isList) {
      const allEvents = manageNote('get');
      const matchedEvent =
        allEvents?.length &&
        allEvents.filter((el) => el.date.day === day && el.date.month === month && el.date.year === year);
      setEventToShow(matchedEvent);
    }
  };

  const CurrentDateEvents = () => {
    if (date && eventToShow?.length) {
      return eventToShow.map((event: ComplexObject, i) => <Txt key={i}>• {event?.note}</Txt>);
    } else if (date && !eventToShow?.length) {
      return <Txt size="s">برای این روز یادداشتی وجود ندارد</Txt>;
    } else {
      return <Txt size="s">لطفا یک روز را انتخاب کنید</Txt>;
    }
  };

  return (
    <CenterWrapper>
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <CalenderBox className="w-100" selectedDate={date} changeDate={pickDay} />
        {!isList ? (
          <Input
            name="note-input"
            placeholder="اینجا بنویسید"
            onChange={(e) => setNote(e.target.value)}
            multiLine={true}
            borderRadius="s"
            className="p-2"
            wrapperClassName="mt-2 w-100 mb-4 shadow-sm h-100"
            bgColor="CARD_BG"
          />
        ) : (
          <Card borderRadius="s" bgColor="CARD_BG" className="p-2 my-2">
            {/*@ts-ignore*/}
            <CurrentDateEvents />
          </Card>
        )}
        {!isList ? (
          <Btn
            width="120px"
            hasIcon={false}
            childWrapperClass="px-3"
            children="ثبت"
            bgColor="GREEN"
            onClick={saveNote}
          />
        ) : null}
      </Card>
    </CenterWrapper>
  );
}
