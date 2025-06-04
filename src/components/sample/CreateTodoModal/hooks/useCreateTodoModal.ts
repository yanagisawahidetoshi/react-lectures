import { useRef } from 'react';
import type { Props } from '..';

export type UseCreateTodoModalReturn = {
  modalContentRef: React.RefObject<HTMLDivElement | null>;
  handleSubmitAndClose: (todoTitle: string) => void;
};

export const useCreateTodoModal = (
  onSubmit: Props['onSubmit'],
  onClose: Props['onClose']
): UseCreateTodoModalReturn => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleSubmitAndClose = (todoTitle: string) => {
    onSubmit(todoTitle);
    onClose();
  };

  return {
    modalContentRef,
    handleSubmitAndClose,
  };
};
