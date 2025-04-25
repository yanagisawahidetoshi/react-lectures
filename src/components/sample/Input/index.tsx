import { css } from '@emotion/css';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input: React.FC<Props> = ({ value, onChange, placeholder }) => {
  const inputStyle = css`
    border: 1px solid #6766;
    padding: 6px;
  `;

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      className={inputStyle}
    />
  );
};
