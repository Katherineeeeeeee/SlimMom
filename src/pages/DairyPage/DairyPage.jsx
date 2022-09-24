import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getID } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';

import Button from 'components/Shared/Button';
import SideBar from 'components/SideBar';

import DiaryAddProductForm from '../../components/Dairy/DiaryAddProductForm';
import DiaryDateСalendar from '../../components/Dairy/DiaryDateСalendar';
import DiaryProductsList from '../../components/Dairy/DiaryProductsList';

import s from './DairyPage.module.scss';

import { dailyRateUser } from 'redux/daily-rate/daily-rate-operations';
import { getUserParams } from 'redux/userParams/user-params-selectors';

const DairyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const isTabletDesktop = useMediaQuery({ minWidth: 767 });

  const id = useSelector(getID);
  const userParams = useSelector(getUserParams);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(dailyRateUser({ id, ...userParams }));
    }
  }, [dispatch, id, userParams]);

  return (
    <main className={s.wrapper}>
      <div className={s.overlay}>
        <div>
          <DiaryDateСalendar />
          {isTabletDesktop && <DiaryAddProductForm />}
          <DiaryProductsList />
        </div>
        {isMobile && (
          <Link to="/calculator-calories" className={s.btnDairyPage}>
            +
          </Link>
        )}
      </div>
      <SideBar />
    </main>
  );
};

export default DairyPage;
