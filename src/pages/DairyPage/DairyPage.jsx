import { useMediaQuery } from 'react-responsive';

import Button from 'components/Shared/Button';
import DiaryAddProductForm from '../../components/Dairy/DiaryAddProductForm';
import DiaryDateСalendar from '../../components/Dairy/DiaryDateСalendar';
import DiaryProductsList from '../../components/Dairy/DiaryProductsList';

import SideBar from 'components/SideBar';

import s from './DairyPage.module.scss';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

const DairyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const dispatch = useDispatch();

  const isTabletDesktop = useMediaQuery({ minWidth: 767 });


  // useEffect(() => {}, []);


  return (
    <main className={s.wrapper}>
      <div className={s.overlay}>
        <div>
          <DiaryDateСalendar />
          {isTabletDesktop && <DiaryAddProductForm />}
          <DiaryProductsList />
        </div>
        {isMobile && <Button type="button" btnClass="btnDairyPage" />}
      </div>
      <SideBar />
    </main>
  );
};

export default DairyPage;
