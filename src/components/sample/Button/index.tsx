import { cx } from '@emotion/css';
import React, { ButtonHTMLAttributes } from 'react';
import * as styles from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'danger' | 'default';
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ variant, children, ...rest }) => {
  const variantStyle = {
    primary: styles.primaryVariantStyle,
    danger: styles.dangerVariantStyle,
    default: styles.defaultVariantStyle,
  }[variant];

  return (
    <button className={cx(styles.baseStyle, variantStyle)} {...rest}>
      {children}
    </button>
  );
};
