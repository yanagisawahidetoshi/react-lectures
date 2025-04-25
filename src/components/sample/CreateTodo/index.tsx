import { useState } from 'react';
import { Input } from '../Input';
import styles from './styles.module.css';

type Props = {
  onSubmit: (v: string) => void;
};

export const CreateTodo: React.FC<Props> = ({ onSubmit }) => {
  const [todo, setTodo] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!todo) {
      alert('タイトルを登録してください');
      return;
    }
    setTodo('');
    onSubmit(todo);
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label htmlFor="title" className={styles.label}>
          ToDoを登録する
        </label>
        <div>
          <Input
            placeholder="タイトル"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">登録する</button>
        </div>
      </form>
    </>
  );
};
