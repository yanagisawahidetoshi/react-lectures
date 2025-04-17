import { JSX } from 'react';
import TodosRow, { TodosRowProps } from './TodosRow';
import './TodosTable.css';

const TodosTable: React.FC<{ todos: TodosRowProps[] }> = ({ todos }) => {
  const rowComponents: JSX.Element[] = [...todos]
    .sort((a: TodosRowProps, b: TodosRowProps) => {
      if (a.createdAt > b.createdAt) {
        return 1;
      } else if (a.createdAt < b.createdAt) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((r: TodosRowProps) => <TodosRow {...r} />);

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
      <tbody>{rowComponents}</tbody>
    </table>
  );
};

export default TodosTable;
