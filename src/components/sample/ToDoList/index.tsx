import type { ToDo } from '../../../types';
import { ToDoItem } from '../ToDoItem';
import * as styles from './styles.module.ts';

type Props = {
  todos: ToDo[];
  onClickDelete: (id: number) => void;
  onSubmitEdit: (id: number, title: string) => void;
};

export const ToDoList: React.FC<Props> = ({
  todos,
  onClickDelete,
  onSubmitEdit,
}) => {
  const sortedTodos = [...todos].sort(
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
            <ToDoItem
              todo={v}
              onClickDelete={onClickDelete}
              onSubmitEdit={onSubmitEdit}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
