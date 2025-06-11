/* eslint-disable prettier/prettier */
import maplibregl, { Map } from 'maplibre-gl';
import { useState, useEffect, ReactNode } from 'react';
import { MapContext } from './MapContext';

/**
 * MapProviderPropsインターフェース
 */
export interface MapProviderProps {
  children: ReactNode;
  /**
   * 地理院の背景地図のスタイルを指定します。
   * 'pale'（淡色地図）、'std'（標準地図）、'blank'（白地図）のいずれかを指定できます。
   */
  backgroundMapStyle?: 'pale' | 'std' | 'blank'; // 背景地図のスタイル
}

/**
 * MapProviderコンポーネント
 * @param param0
 * @returns
 */
export const MapProvider: React.FC<MapProviderProps> = ({
  children,
  backgroundMapStyle,
}) => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const mapInstance = new maplibregl.Map({
      container: 'map',
      style: `https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/${backgroundMapStyle ?? 'pale'}.json`,
      center: [139.753, 35.6844],
      zoom: 12,
      minZoom: 5,
      maxZoom: 20,
    });

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
    // 初回のみ
  }, [backgroundMapStyle]);

  return <MapContext.Provider value={{ map }}>{children}</MapContext.Provider>;
};
