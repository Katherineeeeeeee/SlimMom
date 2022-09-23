import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// import { useForm, Controller } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DiaryDateСalendar.module.scss';
import { getInfoByDay } from 'redux/day/day-operations';
import { addDate } from 'redux/dairy-calendar/dairy-calendar-operation';

const DiaryDateСalendar = ({ getDateCalendar }) => {
  const dispatch = useDispatch();

  // const { date } = useSelector(state => console.log(state));

  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = { date: moment(startDate).format('yyyy-MM-DD') };
  const formatDateOper = moment(startDate).format('yyyy-MM-DD');

  useEffect(() => {
    getDateCalendar(startDate);
    dispatch(getInfoByDay(formatDate));
    // dispatch(addDate(formatDateOper));
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
