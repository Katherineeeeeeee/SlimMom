import { useState, useEffect } from 'react';

// import Calendar from 'react-calendar';
import Moment from 'react-moment';
import DatePicker from 'react-datepicker';
// import { useForm, Controller } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
// import { ReactComponent as CalendarIcon } from '../../../images/calendar.svg';
import s from './DiaryDateСalendar.module.scss';

const DiaryDateСalendar = ({ getDateCalendar }) => {
  // const { handleSubmit, control } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getDateCalendar(startDate);
  }, [startDate]);

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
      <button className={s.btnInput} onClick={handleClick}>
        <Moment format="DD.MM.yyyy">{startDate}</Moment>
      </button>

      {isOpen && (
        <div className={s.dateOverlay}>
          <DatePicker selected={startDate} onChange={handleChange} inline />
        </div>
      )}
    </>
  );
};

export default DiaryDateСalendar;
