import { useState } from 'react';
import { CreateTodo } from '../../../components/sample/CreateTodo';
import { ToDoList } from '../../../components/sample/ToDoList';

export const ToDos = () => {
  const initialTodos = [
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

  const [todos, setToDos] = useState(initialTodos);
  const [checkingIds, setCheckingIds] = useState<number[]>([]);

  function deleteTodo(id: number) {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id: number, title: string) {
    setToDos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, title } : todo;
      });
    });
  }

  function createId() {
    const maxId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
    return maxId + 1;
  }

  function addToDo(title: string) {
    setToDos([
      ...todos,
      {
        title,
        id: createId(),
        isCompleted: false,
        createdAt: new Date()
          .toLocaleString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })
          .replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+)/, '$3-$1-$2 $4:$5'),
      },
    ]);
  }

  function handleChangeAllCheckIds(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setCheckingIds(todos.map((v) => v.id));
    } else {
      setCheckingIds([]);
    }
  }

  function toggleCompleted({
    id,
    isChecked,
  }: {
    id: number;
    isChecked: boolean;
  }) {
    setCheckingIds((prevState) =>
      isChecked ? [...prevState, id] : prevState.filter((v) => v !== id)
    );
  }

  function doCompleted() {
    setToDos(
      todos.map((v) => {
        return checkingIds.includes(v.id)
          ? {
              ...v,
              isCompleted: true,
            }
          : v;
      })
    );
  }

  return (
    <article>
      <h1>ToDoリスト</h1>
      <ToDoList
        todos={todos}
        onClickDelete={deleteTodo}
        onSubmitEdit={editTodo}
        onChangeAllCheckIds={handleChangeAllCheckIds}
        checkingIds={checkingIds}
        onChangeCompleted={toggleCompleted}
        onClickDoCompleted={doCompleted}
      />
      <CreateTodo onSubmit={addToDo} />
    </article>
  );
};
