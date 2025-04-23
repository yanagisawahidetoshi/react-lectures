import TodoItem, { TodoItemHandlers, TodoItemProps } from './TodoItem';
import './TodoList.css';

const TodosList: React.FC<{
  todos: TodoItemProps[];
  todoItemHandlers: TodoItemHandlers;
}> = ({ todos, todoItemHandlers }) => {
  const todoItems: TodoItemProps[] = [...todos].sort(
    (a: TodoItemProps, b: TodoItemProps) => {
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
        {todoItems.map((r: TodoItemProps) => (
          <TodoItem todoItem={r} todoItemHandlers={todoItemHandlers} />
        ))}
      </tbody>
    </table>
  );
};

export default TodosList;
