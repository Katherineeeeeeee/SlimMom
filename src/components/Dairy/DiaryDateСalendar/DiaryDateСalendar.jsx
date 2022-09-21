import React, { useState } from 'react';

// import Calendar from 'react-calendar';
// import Moment from 'react-moment';
import ReactDatePicker from 'react-datepicker';
// import { useForm, Controller } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from '../../../images/calendar.svg';
import styles from './DiaryDateСalendar.module.scss';

const DiaryDateСalendar = () => {
  // const { handleSubmit, control } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = e => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ReactDatePicker
        className={styles.ReactDatePicker}
        onChange={handleChange}
        // onBlur={onBlur}
        selected={startDate}
        dateFormat="dd.MM.yyyy"
      />
      <CalendarIcon onClick={handleClick} />
    </>
  );
};

export default DiaryDateСalendar;
