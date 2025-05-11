import { Input } from '../Input';

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
        <Input value={value} onChange={(e) => onChangeInput(e.target.value)} />
      ) : (
        <span>{value}</span>
      )}
    </>
  );
};
