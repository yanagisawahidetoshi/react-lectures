import { ToDo } from '../../../types';
import { ActionButtons } from '../ActionButtons';
import { EditableItem } from '../EditableItem';
import { useToDoItemCheck } from './hooks/useToDoItemCheck';
import { useToDoItemEdit } from './hooks/useToDoItemEdit';

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
  const {
    isEdit,
    handleCancelEdit,
    handleClickEdit,
    handleEditSubmit,
    editingTitle,
    setEditingTitle,
  } = useToDoItemEdit(todo, onSubmitEdit);

  const { handleChangeCompleted } = useToDoItemCheck(todo.id);

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
