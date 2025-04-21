import styles from './styles.module.css';

export const ActionButtons: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.editButton}>編集する</button>
      <button className={styles.deleteButton}>削除する</button>
    </div>
  );
};
