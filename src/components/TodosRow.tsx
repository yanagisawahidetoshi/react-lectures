export type TodosRowProps = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
};

const TodosRow: React.FC<TodosRowProps> = ({
  id,
  title,
  isCompleted,
  createdAt,
}) => (
  <tr className={isCompleted ? 'completed' : ''}>
    <td>
      <input type="checkbox" />
    </td>
    <td>{id}</td>
    <td>{title}</td>
    <td>{isCompleted ? '完了' : '未完了'}</td>
    <td>{createdAt}</td>
    <td>
      <button className="edit">編集する</button>
      <button className="delete">削除する</button>
    </td>
  </tr>
);

export default TodosRow;
