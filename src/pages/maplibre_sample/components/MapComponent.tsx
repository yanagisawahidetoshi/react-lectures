/* eslint-disable prettier/prettier */

import React, { useRef, useEffect, memo, useState } from 'react';
import maplibregl from 'maplibre-gl';
import axios from 'axios';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useMap } from '../context/useMap';
import { mapCenterIconWrapperStyle, mapComponentStyle } from './style';

/**
 * MapComponentは、Maplibreの地図を表示するコンポーネントです。
 * 中心アイコンをオプションで非表示にできます。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {boolean} [props.hideCenterIcon=false] - 中心アイコンを非表示にするかどうか
 * @returns {JSX.Element} - MapComponent
 */
interface LocationData {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}

export const MapComponent: React.NamedExoticComponent<{
  hideCenterIcon?: boolean; // 中心アイコンを非表示にするオプション
  centerIconStrokeColor?: string; // ストロークの色を指定するオプション
}> = memo(({ hideCenterIcon, centerIconStrokeColor }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { map } = useMap();
  const [locations, setLocations] = useState<LocationData[]>([]);
  const markersRef = useRef<maplibregl.Marker[]>([]);

  // APIからすべての場所のデータを取得
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get<LocationData[]>('http://localhost:3001/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      }
    };

    fetchLocations();
  }, []);

  // マップと場所データが準備できたらマーカーを追加
  useEffect(() => {
    if (map && mapContainerRef.current && locations.length > 0) {
      map.resize();

      // 既存のマーカーをクリア
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      // 各場所にマーカーを追加
      locations.forEach((location) => {
        const marker = new maplibregl.Marker()
          .setLngLat([location.location.lng, location.location.lat])
          .addTo(map);

        // ポップアップを追加
        const popup = new maplibregl.Popup({ offset: 25 }).setHTML(`
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${location.name}</h3>
              <p style="margin: 0; font-size: 12px; color: #666;">${location.address}</p>
            </div>
          `);

        marker.setPopup(popup);
        markersRef.current.push(marker);
      });

      // すべてのマーカーが表示されるようにビューを調整
      if (locations.length > 1) {
        const bounds = new maplibregl.LngLatBounds();
        locations.forEach((location) => {
          bounds.extend([location.location.lng, location.location.lat]);
        });
        map.fitBounds(bounds, { padding: 50 });
      }

      // クリーンアップ関数でマーカーを削除
      return () => {
        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];
      };
    }
  }, [map, locations]);

  // ストロークの色を定義
  const strokeColor = centerIconStrokeColor ?? 'rgba(100,100,100,0.75)';

  return (
    <div ref={mapContainerRef} id="map" className={mapComponentStyle}>
      {!hideCenterIcon && (
        <div id="icon-center" className={mapCenterIconWrapperStyle}>
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
