import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CreateTodo } from '../CreateTodo';
import * as modalStyles from './styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (todoTitle: string) => void;
};

const portalTargetElement = document.body;

export const CreateTodoModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !portalTargetElement) {
    return null;
  }

  const handleSubmitAndClose = (todoTitle: string) => {
    onSubmit(todoTitle);
    onClose();
  };

  return ReactDOM.createPortal(
    <div
      className={modalStyles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={modalStyles.content}
        ref={modalContentRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={modalStyles.closeButton}
          aria-label="閉じる"
        >
          &times;
        </button>
        <CreateTodo onSubmit={handleSubmitAndClose} />
      </div>
    </div>,
    portalTargetElement
  );
};
