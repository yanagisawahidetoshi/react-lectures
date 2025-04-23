import { useState } from 'react';

export type TodoItemProps = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
};
export type TodoUpdateItemProps = {
  id?: number;
  title?: string;
  isCompleted?: boolean;
  createdAt?: string;
};
export type TodoItemHandlers = {
  update: (targetId: number, newTodoItem: TodoUpdateItemProps) => void;
  delete: (targetId: number) => void;
};

const TodoItem: React.FC<{
  todoItem: TodoItemProps;
  todoItemHandlers: TodoItemHandlers;
}> = ({ todoItem, todoItemHandlers }) => {
  const [title, setTitle] = useState(todoItem.title);
  const [editing, setEditing] = useState(false);
  return (
    <tr className={todoItem.isCompleted ? 'completed' : ''}>
      <td>
        <input type="checkbox" />
      </td>
      <td>{todoItem.id}</td>
      <td>
        {editing ? (
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        ) : (
          todoItem.title
        )}
      </td>
      <td>{todoItem.isCompleted ? '完了' : '未完了'}</td>
      <td>{todoItem.createdAt}</td>
      <td className="button-container">
        {editing ? (
          <>
            <button
              className="save"
              onClick={() => {
                todoItemHandlers.update(todoItem.id, {
                  title: title,
                });
                setEditing(false);
              }}
            >
              保存する
            </button>
            <button
              className="cancel"
              onClick={() => {
                setTitle(todoItem.title);
                setEditing(false);
              }}
            >
              キャンセル
            </button>
          </>
        ) : (
          <button
            className="edit"
            onClick={() => {
              setEditing(true);
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
