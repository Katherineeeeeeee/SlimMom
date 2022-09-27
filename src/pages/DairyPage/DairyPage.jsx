import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import s from './DairyPage.module.scss';

import SideBar from 'components/SideBar';
import Button from 'components/Shared/Button';
import DiaryAddProductForm from '../../components/Dairy/DiaryAddProductForm';
import DiaryDateСalendar from '../../components/Dairy/DiaryDateСalendar';
import DiaryProductsList from '../../components/Dairy/DiaryProductsList';
import Modal from 'components/Modal';
import GreetingForm from 'components/GreetingForm';

import { getNotAllowedProducts } from 'redux/auth/auth-selectors';

const DairyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const notAllowedProduct = useSelector(getNotAllowedProducts);
  const firstLoading = notAllowedProduct?.length === 0;

  const isTabletDesktop = useMediaQuery({ minWidth: 767 });

  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    document.querySelector('body').classList.add('no-scroll');
    setModalOpen(true);
  };

  return (
    <main className={s.wrapper}>
      {firstLoading && <GreetingForm />}
      {!firstLoading && (
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
              children={<DiaryAddProductForm setModalOpen={setModalOpen} />}
            />
          )}
        </div>
      )}

      <SideBar />
    </main>
  );
};

export default DairyPage;
