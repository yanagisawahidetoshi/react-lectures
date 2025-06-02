/* eslint-disable prettier/prettier */
import { css, cx } from '@emotion/css';
import React, { HtmlHTMLAttributes } from 'react';

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
    <div
      className={cx(
        css({
          height: '40px',
          width: '100%',
          backgroundColor: '#333',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '8px',
          padding: '0 16px',
        }),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
