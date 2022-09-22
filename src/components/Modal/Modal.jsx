import Button from 'components/Shared/Button';
import { useEffect } from 'react';

import s from './Modal.module.scss';

const Modal = ({ setModalOpen }) => {
  useEffect(() => {
    const onEscPush = e => {
      if (e.code !== 'Escape') {
        return;
      }
      setModalOpen(false);
    };

    window.addEventListener('keydown', onEscPush);

    return () => {
      window.removeEventListener('keydown', onEscPush);
    };
  }, [setModalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <div className={s.overlay} onClick={onOverlayClick}>
      <div className={s.modal}>
        <div className={s.mobileClose}>
          <span onClick={closeModal} className={s.closeM}></span>
        </div>
        <span onClick={closeModal} className={s.closeOther}></span>
        <h2 className={s.modalTitle}>
          Your recommended daily calorie intake is
        </h2>
        <p className={s.modalText}>
          2800<span className={s.textDescription}> kcal</span>
        </p>
        <div className={s.menuGroup}>
          <p className={s.menuGroupTitle}>Foods you should not eat</p>
          <ol className={s.menuGroupList}>
            <li className={s.menuGroupItems}>Flour products</li>
            <li className={s.menuGroupItems}>Milk</li>
          </ol>
        </div>
        <Button text="Start losing weight" type="submit" btnClass="btn" />
      </div>
    </div>
  );
};

export default Modal;
