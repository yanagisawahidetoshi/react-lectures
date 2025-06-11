import { useState } from 'react';
import {
  createId,
  createTodo,
} from '../../../../components/sample/libs/createTodo';
import { useCheckingIdsState } from '../../../../sample/contexts/checkingIds/contexts';
import type { TCheckingIdsState } from '../../../../sample/contexts/checkingIds/types';
import type { ToDo } from '../../../../types';

export type UseToDosActionsReturn = {
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
  addToDo: (title: string) => void;
  doCompleted: () => void;
  checkingIds: TCheckingIdsState;
  todos: ToDo[];
};

export const useToDosActions = (
  initialTodos: ToDo[]
): UseToDosActionsReturn => {
  const [todos, setToDos] = useState(initialTodos);

  const checkingIds = useCheckingIdsState();

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

  function addToDo(title: string) {
    const newTodo = createTodo(title, createId(todos));
    setToDos([...todos, newTodo]);
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

  return {
    deleteTodo,
    editTodo,
    addToDo,
    doCompleted,
    checkingIds,
    todos,
  };
};
