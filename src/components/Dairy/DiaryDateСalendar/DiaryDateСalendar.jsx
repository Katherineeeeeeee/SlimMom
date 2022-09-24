import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DiaryDateСalendar.module.scss';
import { addDate } from 'redux/dairy-calendar/dairy-calendar-slice';
import { getInfoByDay } from 'redux/day/day-operations';

const DiaryDateСalendar = () => {
  const dispatch = useDispatch();

  const date = useSelector(({ dairyCalendar }) => dairyCalendar.date);

  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(addDate(moment(new Date()).format('yyyy-MM-DD')));
    // dispatch(getInfoByDay({ date: moment(new Date()).format('yyyy-MM-DD') }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    let currentDate = e.toISOString().slice(0, 10);
    console.log(currentDate);
    setStartDate(e);
    setIsOpen(!isOpen);
    dispatch(addDate(moment(e).format('yyyy-MM-DD')));
    dispatch(getInfoByDay({ date: moment(e).format('yyyy-MM-DD') }));
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={s.btnInput} onClick={handleClick}>
        {moment(date).format('DD-MM-yyyy')}
      </button>

      {isOpen && (
        <div className={s.dateOverlay}>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            maxDate={new Date()}
            inline
          />
        </div>
      )}
    </>
  );
};

export default DiaryDateСalendar;
