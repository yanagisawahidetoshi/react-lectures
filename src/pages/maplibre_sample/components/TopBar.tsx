/* eslint-disable prettier/prettier */
import { cx } from '@emotion/css';
import React, { HtmlHTMLAttributes } from 'react';
import { topBarStyle } from './style';

/**
 * TopBarコンポーネント。
 * ページの上部に固定されるバーで、ナビゲーションやタイトルなどを表示します。
 * @param {TopBarProps} props - コンポーネントのプロパティ。
 * @returns {JSX.Element} - The TopBar component.
 */
export const TopBar: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cx(topBarStyle, className)} {...rest}>
      {children}
    </div>
  );
};
