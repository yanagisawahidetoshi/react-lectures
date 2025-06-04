import { useState } from 'react';
import { Props } from '..';

type UseToDoItemEditReturn = {
  handleClickEdit: () => void;
  handleCancelEdit: () => void;
  handleEditSubmit: () => void;
  isEdit: boolean;
  editingTitle: string;
  setEditingTitle: (v: string) => void;
};

export const useToDoItemEdit = (
  todo: Props['todo'],
  onSubmitEdit: Props['onSubmitEdit']
): UseToDoItemEditReturn => {
  const [editingTitle, setEditingTitle] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);

  function handleClickEdit() {
    setIsEdit(true);
  }

  function handleEditSubmit() {
    setIsEdit(false);
    onSubmitEdit(todo.id, editingTitle);
  }

  function handleCancelEdit() {
    setIsEdit(false);
    setEditingTitle(todo.title);
  }

  return {
    handleClickEdit,
    handleCancelEdit,
    handleEditSubmit,
    isEdit,
    editingTitle,
    setEditingTitle,
  };
};
