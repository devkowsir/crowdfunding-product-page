import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {
  const modalCloser = (e) => {
    console.log(e.eventPhase);
    onClose();
  };
  return createPortal(
    <dialog className="modal" aria-modal="true" open>
      <div className="modal__container">{children}</div>
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
