import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import * as styles from './styles';

type Props = {
  onSubmit: (v: string) => void;
};

export const CreateTodo: React.FC<Props> = ({ onSubmit }) => {
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

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="title" className={styles.label}>
        ToDoを登録する
      </label>
      <div>
        <Input
          placeholder="タイトル"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          id="title"
        />
        <Button variant="primary" type="submit">
          登録する
        </Button>
      </div>
    </form>
  );
};
