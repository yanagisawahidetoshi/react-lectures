export type TodosRowProps = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
};

const TodosRow: React.FC<{
  todosRow: TodosRowProps;
  deleteItem: (todosRow: TodosRowProps) => void;
}> = ({ todosRow, deleteItem }) => (
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
      <button
        className="delete"
        onClick={() => {
          deleteItem(todosRow);
        }}
      >
        削除する
      </button>
    </td>
  </tr>
);

export default TodosRow;
