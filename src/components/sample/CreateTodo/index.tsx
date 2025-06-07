import { Button } from '../Button';
import { Input } from '../Input';
import { useCreateTodo } from './hooks/useCreateTodo';
import * as styles from './styles';

export type Props = {
  onSubmit: (v: string) => void;
};

export const CreateTodo: React.FC<Props> = ({ onSubmit }) => {
  const { todo, setTodo, handleSubmit } = useCreateTodo(onSubmit);

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
