import { useState } from 'react';
import { useCheckingIdsDispatch } from '../../../sample/contexts/checkingIds/contexts';
import { ToDo } from '../../../types';
import { ActionButtons } from '../ActionButtons';
import { EditableItem } from '../EditableItem';

export type Props = {
  todo: ToDo;
  onSubmitEdit: (id: number, title: string) => void;
  onClickDelete: (id: number) => void;
  isChecked: boolean;
};

export const ToDoItem: React.FC<Props> = ({
  todo,
  onClickDelete,
  onSubmitEdit,
  isChecked,
}) => {
  const [editingTitle, setEditingTitle] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useCheckingIdsDispatch();
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

  function handleChangeCompleted(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch({ type: 'ADD_ID', payload: todo.id });
    } else {
      dispatch({ type: 'REMOVE_ID', payload: todo.id });
    }
  }

  return (
    <>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChangeCompleted}
        />
      </td>
      <td>{todo.id}</td>
      <td>
        <EditableItem
          value={editingTitle}
          onChangeInput={(v) => setEditingTitle(v)}
          isEdit={isEdit}
        />
      </td>
      <td>{todo.isCompleted ? '完了' : '未完了'}</td>
      <td>{todo.createdAt}</td>
      <td>
        <ActionButtons
          onClickDelete={() => onClickDelete(todo.id)}
          onClickEdit={handleClickEdit}
          isEdit={isEdit}
          onClickEditCancel={handleCancelEdit}
          onClickEditSubmit={handleEditSubmit}
        />
      </td>
    </>
  );
};
