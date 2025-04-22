import { useState } from 'react';
import TodosList from '../../components/TodosList';
import { TodosRowProps } from '../../components/TodosList/TodosRow';

export const ToDos = () => {
  const initialTodos: TodosRowProps[] = [
    {
      id: 1,
      title: 'Todo 1',
      isCompleted: false,
      createdAt: '2025-04-10 08:45',
    },
    {
      id: 2,
      title: 'Todo 2',
      isCompleted: true,
      createdAt: '2025-04-12 15:20',
    },
    {
      id: 3,
      title: 'Todo 3',
      isCompleted: false,
      createdAt: '2025-04-09 11:10',
    },
    {
      id: 4,
      title: 'Todo 4',
      isCompleted: true,
      createdAt: '2025-04-11 17:30',
    },
    {
      id: 5,
      title: 'Todo 5',
      isCompleted: false,
      createdAt: '2025-04-13 09:55',
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const deleteItem: (todosRow: TodosRowProps) => void = (
    todosRow: TodosRowProps
  ) => {
    if (
      window.confirm(`${todosRow.title} (ID=${todosRow.id})\nを削除しますか？`)
    ) {
      setTodos((prev: TodosRowProps[]) =>
        prev
          .map((row: TodosRowProps) => ({ ...row })) // deepcopy 必要？
          .filter((row: TodosRowProps) => row.id !== todosRow.id)
      );
    }
  };

  return (
    <article>
      <h1>ToDoリスト</h1>
      <TodosList todos={todos} deleteItem={deleteItem} />
    </article>
  );
};
