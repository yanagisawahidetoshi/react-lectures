/* eslint-disable prettier/prettier */
// ExampleComponent.tsx
import React from 'react';
import { useMap } from '../context/useMap';
import { css } from '@emotion/css';
/**
 * サンプルコンポーネント。
 * ボタンをクリックすると、現在のマップの中心座標をアラートで表示します。
 * @returns {JSX.Element} - The ExampleComponent.
 */
const ExampleComponent: React.FC = () => {
  const { map } = useMap();
  return (
    <button
      className={css({
        backgroundColor: '#f0f0f0',
        color: 'black',
      })}
      onClick={() => {
        alert(
          `地図中心座標: ${map ? map.getCenter().toString() : 'Map not initialized'}`
        );
      }}
    >
      サンプル(中心座標表示)
    </button>
  );
};

export default ExampleComponent;
