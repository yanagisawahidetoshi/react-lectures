import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !portalTargetElement) {
    return null;
  }

  const handleSubmitAndClose = (todoTitle: string) => {
    onSubmit(todoTitle);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={modalStyles.overlay} role="dialog" aria-modal="true">
      <div className={modalStyles.content} ref={modalContentRef}>
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
