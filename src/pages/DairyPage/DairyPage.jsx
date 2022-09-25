import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { getID } from 'redux/auth/auth-selectors';
// import { useEffect } from 'react';

import SideBar from 'components/SideBar';
import Button from 'components/Shared/Button';

import DiaryAddProductForm from '../../components/Dairy/DiaryAddProductForm';
import DiaryDateСalendar from '../../components/Dairy/DiaryDateСalendar';
import DiaryProductsList from '../../components/Dairy/DiaryProductsList';
import Modal from 'components/Modal';

import s from './DairyPage.module.scss';

// import { dailyRateUser } from 'redux/daily-rate/daily-rate-operations';

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

const DairyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const dispatch = useDispatch();

  const isTabletDesktop = useMediaQuery({ minWidth: 767 });

  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {}, []);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <main className={s.wrapper}>
      <div className={s.overlay}>
        <div>
          <DiaryDateСalendar />
          {isTabletDesktop && <DiaryAddProductForm />}
          <DiaryProductsList />
        </div>
        {isMobile && (
          <div className={s.btn}>
            <Button
              text="+"
              btnClass="btnPlus"
              type="button"
              handleClick={handleClick}
            />
          </div>
        )}
        {modalOpen && (
          <Modal
            setModalOpen={setModalOpen}
            overlayClass="overlayDairyPage"
            modalClass="modalDairyPage"
            children={<DiaryAddProductForm />}
          />
        )}
      </div>

      <SideBar />
    </main>
  );
};

export default DairyPage;
