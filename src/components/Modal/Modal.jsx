import { useEffect } from 'react';

import s from './Modal.module.scss';

const Modal = ({
  setModalOpen,
  overlayClass = 'overlay',
  modalClass = 'modal',
  children,
}) => {
  useEffect(() => {
    const onEscPush = e => {
      if (e.code !== 'Escape') {
        return;
      }
      removeNoScrollClassList();
      setModalOpen(false);
    };

    window.addEventListener('keydown', onEscPush);

    return () => {
      window.removeEventListener('keydown', onEscPush);
    };
  }, [setModalOpen]);

  function removeNoScrollClassList() {
    document.querySelector('body').classList.remove('no-scroll');
  }

  const closeModal = () => {
    removeNoScrollClassList();
    setModalOpen(false);
  };

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      removeNoScrollClassList();
      setModalOpen(false);
    }
  };

  return (
    <div className={s[overlayClass]} onClick={onOverlayClick}>
      <div className={s[modalClass]}>
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
