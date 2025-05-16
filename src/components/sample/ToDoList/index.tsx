import type { ToDo } from '../../../types';
import type { Props as ToDoItemProps } from '../ToDoItem';
import { ToDoItem } from '../ToDoItem';
import * as styles from './styles.ts';

export type Props = {
  todos: ToDo[];
  onClickDelete: (id: number) => void;
  onSubmitEdit: (id: number, title: string) => void;
  onChangeAllCheckIds: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkingIds: number[];
  onChangeCompleted: ToDoItemProps['onChangeCompleted'];
  onClickDoCompleted: () => void;
};

export const ToDoList: React.FC<Props> = ({
  todos,
  onClickDelete,
  onSubmitEdit,
  onChangeAllCheckIds,
  checkingIds,
  onChangeCompleted,
  onClickDoCompleted,
}) => {
  const sortedTodos = [...todos].sort(
    (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
  );

  return (
    <>
      <div className={styles.completedContainer}>
        <button onClick={onClickDoCompleted} className={styles.completed}>
          チェックしたものを完了にする
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={onChangeAllCheckIds} />
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
                isChecked={checkingIds.includes(v.id)}
                onChangeCompleted={onChangeCompleted}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
