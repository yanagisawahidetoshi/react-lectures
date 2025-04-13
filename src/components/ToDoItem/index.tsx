import { ToDo } from '../../types';
import { ActionButtons } from '../ActionButtons';

export const ToDoItem: React.FC<{ todo: ToDo }> = ({ todo }) => {
  return (
    <>
      <td>
        <input type="checkbox" />
      </td>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.isCompleted ? '完了' : '未完了'}</td>
      <td>{todo.createdAt}</td>
      <td>
        <ActionButtons />
      </td>
    </>
  );
};
