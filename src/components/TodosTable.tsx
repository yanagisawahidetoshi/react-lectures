import TodosRow, { TodosRowProps } from './TodosRow';
import './TodosTable.css';

const TodosTable: React.FC<{ todos: TodosRowProps[] }> = ({ todos }) => {
  const rowComponents: TodosRowProps[] = [...todos].sort(
    (a: TodosRowProps, b: TodosRowProps) => {
      if (a.createdAt > b.createdAt) {
        return 1;
      } else if (a.createdAt < b.createdAt) {
        return -1;
      } else {
        return 0;
      }
    }
  );
  return (
    <table>
      <thead>
        <tr>
          <th>✅</th>
          <th>ID</th>
          <th>Title</th>
          <th>IsCompleted</th>
          <th>CreatedAt</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rowComponents.map((r: TodosRowProps) => (
          <TodosRow todosRow={r} />
        ))}
      </tbody>
    </table>
  );
};

export default TodosTable;
