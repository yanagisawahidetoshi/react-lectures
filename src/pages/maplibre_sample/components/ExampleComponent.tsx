/* eslint-disable prettier/prettier */
// ExampleComponent.tsx
import React from 'react';
import { useMap } from '../context/useMap';
import { exampleComponentStyle } from './style';
/**
 * 地図操作のサンプルコンポーネント。
 * ボタンをクリックすると、現在のマップの中心座標をアラートで表示します。
 * @returns {JSX.Element} - The ExampleComponent.
 */
const ExampleComponent: React.FC = () => {
  const { map } = useMap();
  return (
    <button
      className={exampleComponentStyle}
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
