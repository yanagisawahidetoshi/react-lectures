import { useState } from 'react';
import { ToDo } from '../../../types';
import { ActionButtons } from '../ActionButtons';
import { EditableItem } from '../EditableItem';

export type Props = {
  todo: ToDo;
  onSubmitEdit: (id: number, title: string) => void;
  onClickDelete: (id: number) => void;
  isChecked: boolean;
  onChangeCompleted: ({
    id,
    isChecked,
  }: {
    id: number;
    isChecked: boolean;
  }) => void;
};

export const ToDoItem: React.FC<Props> = ({
  todo,
  onClickDelete,
  onSubmitEdit,
  isChecked,
  onChangeCompleted,
}) => {
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

  return (
    <>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) =>
            onChangeCompleted({
              id: todo.id,
              isChecked: e.target.checked,
            })
          }
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
