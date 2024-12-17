import React from 'react';
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker';

interface CalenderBoxProps {
  selectedDate: any;
  changeDate: Function;
  className?: string;
}

export default function CalenderBox(props: CalenderBoxProps): JSX.Element {
  const { selectedDate = '', changeDate, className = '' } = props;
  return (
    <Calendar
      calendarClassName={className}
      shouldHighlightWeekends
      locale="fa"
      onChange={(date) => changeDate(date)}
      value={selectedDate}
      calendarTodayClassName="text-info"
      calendarSelectedDayClassName="bg-warning"
    />
  );
}
