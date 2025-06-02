/* eslint-disable prettier/prettier */

import React, { useRef, useEffect, memo } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useMap } from '../context/useMap';
import { css } from '@emotion/css';

/**
 * MapComponentは、Maplibreの地図を表示するコンポーネントです。
 * 中心アイコンをオプションで非表示にできます。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {boolean} [props.hideCenterIcon=false] - 中心アイコンを非表示にするかどうか
 * @returns {JSX.Element} - MapComponent
 */
export const MapComponent: React.NamedExoticComponent<{
  hideCenterIcon?: boolean; // 中心アイコンを非表示にするオプション
}> = memo(({ hideCenterIcon }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { map } = useMap();

  useEffect(() => {
    if (map && mapContainerRef.current) {
      map.resize();
    }
  }, [map]);

  const strokeColor = 'rgba(100,100,100,0.75)'; // ストロークの色を定義

  return (
    <div
      ref={mapContainerRef}
      id="map"
      className={css({
        position: 'relative',
        height: 'calc(100% - 40px)',
        width: '100%',
      })}
    >
      {!hideCenterIcon && (
        <div
          id="icon-center"
          className={css({
            position: 'absolute',
            top: '50%',
            left: ' 50%',
            transform: ' translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 1,
          })}
        >
          {/* 中心マーク */}
          <svg
            focusable="false"
            width="64x"
            height="64px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5001 12.5H16.5601"
              stroke={strokeColor}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.44 12.5H2.5"
              stroke={strokeColor}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22V17.06"
              stroke={strokeColor}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 7.94V3"
              stroke={strokeColor}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.26001 10.5C5.93001 8.22 7.73001 6.41999 10.01 5.75999"
              stroke={strokeColor}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.01 19.24C16.29 18.58 18.09 16.78 18.76 14.5"
              stroke={strokeColor}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.26001 14.5C5.93001 16.78 7.73001 18.58 10.01 19.24"
              stroke={strokeColor}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.01 5.75999C16.29 6.41999 18.09 8.22 18.76 10.5"
              stroke={strokeColor}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
});
