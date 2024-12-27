import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import Icon from '../Icon';
import { ModalStyles } from './ModalStyles';

const modalRoot = document.getElementById('modal-backdrop');

const Modal = ({ children, closeModal, menu, done }) => {
  useEffect(() => {
    function onEsc({ code }) {
      if (code !== 'Escape') {
        return;
      }

      closeModal();
    }
    document.body.style.overflow = 'hidden';
    const paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';

    document.body.style.paddingRight = paddingOffSet;
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [closeModal]);

  const onBackdrop = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    closeModal();
  };

  return createPortal(
    <ModalStyles onClick={onBackdrop} $menu={menu} $done={done}>
      <div>
        <button type="button" onClick={() => closeModal(false)}>
          <Icon name="x" />
        </button>
        {children}
      </div>
    </ModalStyles>,
    modalRoot
  );
};

export default Modal;
