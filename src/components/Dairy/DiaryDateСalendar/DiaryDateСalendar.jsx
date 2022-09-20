import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Moment from 'react-moment';

import 'react-calendar/dist/Calendar.css';
import { ReactComponent as CalendarIcon } from '../../../images/calendar.svg';
import styles from './DiaryDateСalendar.module.scss';

const DiaryDateСalendar = () => {
  const [date, onChange] = useState(new Date());
  const [isActive, setActive] = useState('false');

  const handleToggleCalendar = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Moment format="DD.MM.YYYY" className={styles.dateFormat}>
        {date.toString()}
      </Moment>
      <CalendarIcon onClick={handleToggleCalendar} />
      {!isActive && <Calendar onChange={onChange} value={date} locale="en" />}
    </>
  );
};

export default DiaryDateСalendar;
