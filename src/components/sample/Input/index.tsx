import * as styles from './styles.ts';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ ...rest }) => {
  return <input type="text" className={styles.inputStyle} {...rest} />;
};
