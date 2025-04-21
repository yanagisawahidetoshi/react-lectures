import { Dispatch, SetStateAction } from 'react';

export type TodosRowProps = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
};

const TodosRow: React.FC<{
  todosRow: TodosRowProps;
  setTodos: Dispatch<SetStateAction<TodosRowProps[]>>;
}> = ({ todosRow, setTodos }) => {
  const deleteItem: () => void = () => {
    if (window.confirm(`ID=${todosRow.id}を削除しますか？`)) {
      setTodos((prev: TodosRowProps[]) =>
        prev
          .map((row: TodosRowProps) => ({ ...row })) // deepcopy 必要？
          .filter((row: TodosRowProps) => row.id !== todosRow.id)
      );
    }
  };

  return (
    <tr className={todosRow.isCompleted ? 'completed' : ''}>
      <td>
        <input type="checkbox" />
      </td>
      <td>{todosRow.id}</td>
      <td>{todosRow.title}</td>
      <td>{todosRow.isCompleted ? '完了' : '未完了'}</td>
      <td>{todosRow.createdAt}</td>
      <td className="button-container">
        <button className="edit">編集する</button>
        <button className="delete" onClick={deleteItem}>
          削除する
        </button>
      </td>
    </tr>
  );
};

export default TodosRow;
