// src/components/StyledButton/StyledButton.tsx
import { cx } from '@emotion/css'; // cx はクラス名結合に引き続き使用
import React, { ButtonHTMLAttributes } from 'react';
import * as styles from './styles'; // スタイルファイルをインポート

// --- コンポーネントの型定義 (変更なし) ---
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'danger' | 'default'; // variant プロパティを追加
  children: React.ReactNode;
};

// --- コンポーネントの実装 ---
export const Button: React.FC<Props> = ({ variant, children, ...rest }) => {
  // インポートしたスタイルオブジェクトから適切なスタイルを選択
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
