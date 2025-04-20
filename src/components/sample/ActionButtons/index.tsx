import styles from './styles.module.css';

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
          <button className={styles.editButton} onClick={onClickEditSubmit}>
            保存する
          </button>
          <button onClick={onClickEditCancel}>キャンセル</button>
        </>
      ) : (
        <button className={styles.editButton} onClick={onClickEdit}>
          編集する
        </button>
      )}

      <button className={styles.deleteButton} onClick={handleClickDelete}>
        削除する
      </button>
    </div>
  );
};
