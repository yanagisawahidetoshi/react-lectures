export type TodoItemProps = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
  editing?: boolean;
};
export type TodoItemHandlers = {
  startEdit: (todoItem: TodoItemProps) => void;
  save: (todoItem: TodoItemProps) => void;
  delete: (todoItem: TodoItemProps) => void;
};

const TodoItem: React.FC<{
  todoItem: TodoItemProps;
  todoItemHandlers: TodoItemHandlers;
}> = ({ todoItem, todoItemHandlers }) => (
  <tr className={todoItem.isCompleted ? 'completed' : ''}>
    <td>
      <input type="checkbox" />
    </td>
    <td>{todoItem.id}</td>
    <td>{todoItem.title}</td>
    <td>{todoItem.isCompleted ? '完了' : '未完了'}</td>
    <td>{todoItem.createdAt}</td>
    <td className="button-container">
      {todoItem.editing ? (
        <>
          <button className="save">保存する</button>
          <button className="cancel">キャンセル</button>
        </>
      ) : (
        <button
          className="edit"
          onClick={() => {
            todoItemHandlers.startEdit(todoItem);
          }}
        >
          編集する
        </button>
      )}
      <button
        className="delete"
        onClick={() => {
          todoItemHandlers.delete(todoItem);
        }}
      >
        削除する
      </button>
    </td>
  </tr>
);

export default TodoItem;
