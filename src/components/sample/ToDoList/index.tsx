import type { ToDo } from '../../../types';
import { ToDoItem } from '../ToDoItem';
import { useToDoListCheck } from './hooks/useToDoListCheck';
import { useToDoListSort } from './hooks/useToDoListSort';
import * as styles from './styles.ts';

export type Props = {
  todos: ToDo[];
  onClickDelete: (id: number) => void;
  onSubmitEdit: (id: number, title: string) => void;
  checkingIds: number[];
  onClickDoCompleted: () => void;
};

export const ToDoList: React.FC<Props> = ({
  todos,
  onClickDelete,
  onSubmitEdit,
  checkingIds,
  onClickDoCompleted,
}) => {
  const { sortedTodos } = useToDoListSort(todos);
  const { handleChangeAllCheckIds } = useToDoListCheck(todos);

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
              <input
                type="checkbox"
                onChange={(e) => handleChangeAllCheckIds(e.target.checked)}
              />
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
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
