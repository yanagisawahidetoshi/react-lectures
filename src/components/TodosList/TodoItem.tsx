import { useState } from 'react';

export type TodoItemProps = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
  editing?: boolean;
};
export type TodoUpdateItemProps = {
  id?: number;
  title?: string;
  isCompleted?: boolean;
  createdAt?: string;
  editing: boolean;
};
export type TodoItemHandlers = {
  startEdit: (targetId: number) => void;
  cancelEdit: (targetId: number) => void;
  update: (targetId: number, newTodoItem: TodoUpdateItemProps) => void;
  delete: (targetId: number) => void;
};

const TodoItem: React.FC<{
  todoItem: TodoItemProps;
  todoItemHandlers: TodoItemHandlers;
}> = ({ todoItem, todoItemHandlers }) => {
  const [title, setTitle] = useState(todoItem.title);
  return (
    <tr className={todoItem.isCompleted ? 'completed' : ''}>
      <td>
        <input type="checkbox" />
      </td>
      <td>{todoItem.id}</td>
      <td>
        {todoItem.editing ? (
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        ) : (
          todoItem.title
        )}
      </td>
      <td>{todoItem.isCompleted ? '完了' : '未完了'}</td>
      <td>{todoItem.createdAt}</td>
      <td className="button-container">
        {todoItem.editing ? (
          <>
            <button
              className="save"
              onClick={() => {
                todoItemHandlers.update(todoItem.id, {
                  title: title,
                  editing: false,
                });
              }}
            >
              保存する
            </button>
            <button
              className="cancel"
              onClick={() => {
                todoItemHandlers.cancelEdit(todoItem.id);
              }}
            >
              キャンセル
            </button>
          </>
        ) : (
          <button
            className="edit"
            onClick={() => {
              todoItemHandlers.startEdit(todoItem.id);
            }}
          >
            編集する
          </button>
        )}
        <button
          className="delete"
          onClick={() => {
            if (
              window.confirm(
                `${todoItem.title} (ID=${todoItem.id})\nを削除しますか？`
              )
            ) {
              todoItemHandlers.delete(todoItem.id);
            }
          }}
        >
          削除する
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
