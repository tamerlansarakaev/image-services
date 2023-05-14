import React from 'react';

import styles from './Modal.module.scss';

interface IModal {
  onClose?: () => void;
  open: boolean;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<IModal> = ({ onClose, open, children, className }) => {
  return (
    <>
      {open ? (
        <div className={styles.modal}>
          <div className={styles.background} onClick={onClose} />
          <dialog
            className={className ? className : styles.modalBox}
            open={open}
          >
            {children}
          </dialog>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
