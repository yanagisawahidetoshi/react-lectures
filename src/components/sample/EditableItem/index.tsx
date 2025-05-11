import * as styles from './styles.module.ts';

type Props = {
  value: string;
  isEdit: boolean;
  onChangeInput: (value: string) => void;
};
export const EditableItem: React.FC<Props> = ({
  value,
  isEdit,
  onChangeInput,
}) => {
  return (
    <>
      {isEdit ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChangeInput(e.target.value)}
          className={styles.input}
        />
      ) : (
        <span>{value}</span>
      )}
    </>
  );
};
