import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import Button from 'components/Shared/Button';
import DiaryAddProductForm from '../../components/Dairy/DiaryAddProductForm';
import DiaryDateСalendar from '../../components/Dairy/DiaryDateСalendar';
import DiaryProductsList from '../../components/Dairy/DiaryProductsList';
import DiaryChooseProductList from 'components/Dairy/DiaryChooseProductList/DiaryChooseProductList';

const DairyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [day, setday] = useState({ date: '', productId: '', weight: '' });

  const getDateCalendar = startDate => {
    const formatDate = moment(startDate).format('yyyy-MM-DD');
    return setday(day => ({
      ...day,
      date: formatDate,
    }));
  };

  const getWeight = weight => {
    return setday(day => ({
      ...day,
      weight: weight,
    }));
  };

  return (
    <>
      <DiaryDateСalendar getDateCalendar={getDateCalendar} />
      <DiaryAddProductForm getWeight={getWeight} />
      <DiaryChooseProductList day={day} />
      <DiaryProductsList />
      {isMobile && <Button type="button" btnClass="btnDairyPage" />}
    </>
  );
};

export default DairyPage;
