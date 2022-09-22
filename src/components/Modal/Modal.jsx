import { useEffect } from 'react';

import s from './Modal.module.scss';

const Modal = ({ setModalOpen, children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
