import { useState } from 'react';
import { Props } from '..';

export type UseCreateTodoReturn = {
  todo: string;
  setTodo: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const useCreateTodo = (
  onSubmit: Props['onSubmit']
): UseCreateTodoReturn => {
  const [todo, setTodo] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!todo.trim()) {
      alert('タイトルを登録してください');
      return;
    }
    onSubmit(todo);
    setTodo('');
  }

  return {
    todo,
    setTodo,
    handleSubmit,
  };
};
