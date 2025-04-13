import type { ToDo } from '../../types';
import { ToDoItem } from '../ToDoItem';
import styles from './styles.module.css';

type Props = {
  todos: ToDo[];
};

export const ToDoList: React.FC<Props> = ({ todos }) => {
  const sortedTodos = todos.sort(
    (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>ID</th>
          <th>Title</th>
          <th>IsCompleted</th>
          <th>CreatedAt</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedTodos.map((v) => (
          <tr key={v.id}>
            <ToDoItem todo={v} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
