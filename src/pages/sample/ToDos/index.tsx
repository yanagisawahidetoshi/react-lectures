import { useState } from 'react';
import { CreateTodoModal } from '../../../components/sample/CreateTodoModal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const parts = formatter.formatToParts(date);
    const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
    const formatted = `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}`;

    setToDos([
      ...todos,
      {
        title,
        id: createId(),
        isCompleted: false,
        createdAt: formatted,
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
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        ToDoを追加
      </button>
      <CreateTodoModal
        onSubmit={addToDo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </article>
  );
};
