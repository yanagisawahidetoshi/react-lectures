import { Button } from '../Button/index.tsx';
import * as styles from './styles.ts';

type Props = {
  onClickDelete: () => void;
  onClickEdit: () => void;
  isEdit: boolean;
  onClickEditSubmit: () => void;
  onClickEditCancel: () => void;
};

export const ActionButtons: React.FC<Props> = ({
  onClickEdit,
  onClickDelete,
  isEdit,
  onClickEditSubmit,
  onClickEditCancel,
}) => {
  function handleClickDelete() {
    if (window.confirm('本当に削除しますか？')) {
      onClickDelete();
    }
  }

  return (
    <div className={styles.container}>
      {isEdit ? (
        <>
          <Button variant="primary" onClick={onClickEditSubmit}>
            保存する
          </Button>
          <Button variant="default" onClick={onClickEditCancel}>
            キャンセル
          </Button>
        </>
      ) : (
        <Button variant="primary" onClick={onClickEdit}>
          編集する
        </Button>
      )}
      <Button variant="danger" onClick={handleClickDelete}>
        削除する
      </Button>
    </div>
  );
};
