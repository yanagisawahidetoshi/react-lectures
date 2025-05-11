import { css } from '@emotion/css';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ ...rest }) => {
  const inputStyle = css`
    border: 1px solid #6766;
    padding: 6px;
  `;

  return <input type="text" className={inputStyle} {...rest} />;
};
