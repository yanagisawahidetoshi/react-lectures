import { useCheckingIdsDispatch } from '../../../sample/contexts/checkingIds/contexts.ts';
import type { ToDo } from '../../../types';
import { ToDoItem } from '../ToDoItem';
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
  const dispatch = useCheckingIdsDispatch();
  const sortedTodos = [...todos].sort(
    (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
  );

  function handleChangeAllCheckIds(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch({ type: 'SET_IDS', payload: todos.map((v) => v.id) });
    } else {
      dispatch({ type: 'CLEAR_IDS' });
    }
  }

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
              <input type="checkbox" onChange={handleChangeAllCheckIds} />
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
