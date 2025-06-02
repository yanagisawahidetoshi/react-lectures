/* eslint-disable prettier/prettier */

import { css } from '@emotion/css';

/**
 * 地図操作のサンプルコンポーネントのスタイル。
 * ここでは、背景色と文字色を設定しています。
 */
export const exampleComponentStyle = css({
  backgroundColor: '#f0f0f0',
  color: 'black',
});

const topBarHeight = '40px';

/**
 * 地図コンポーネントのスタイル。
 */
export const mapComponentStyle = css({
  position: 'relative',
  height: `calc(100% - ${topBarHeight})`, // トップバーの高さを引いた残りの高さ
  width: '100%',
});

/**
 * 地図の中心アイコンのラッパーのスタイル。
 */
export const mapCenterIconWrapperStyle = css({
  position: 'absolute',
  top: '50%',
  left: ' 50%',
  transform: ' translate(-50%, -50%)',
  pointerEvents: 'none',
  zIndex: 1,
});

/**
 * トップバーのスタイル。
 */
export const topBarStyle = css({
    height: topBarHeight,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
    padding: '0 16px',
  })
