import 'maplibre-gl/dist/maplibre-gl.css';
import React, { memo, useEffect, useRef } from 'react';
import { useMap } from '../context/useMap';
import { useLocations } from '../hooks/useLocations';
import { MapCenterIcon } from './MapCenterIcon';
import { mapComponentStyle } from './style';

/**
 * MapComponentは、Maplibreの地図を表示するコンポーネントです。
 * 中心アイコンをオプションで非表示にできます。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {boolean} [props.hideCenterIcon=false] - 中心アイコンを非表示にするかどうか
 * @param {string} [props.centerIconStrokeColor] - ストロークの色を指定するオプション
 * @returns {JSX.Element} - MapComponent
 */
export const MapComponent: React.NamedExoticComponent<{
  hideCenterIcon?: boolean;
  centerIconStrokeColor?: string;
}> = memo(({ hideCenterIcon, centerIconStrokeColor }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { map } = useMap();
  const { isLoading, error } = useLocations(map);

  useEffect(() => {
    if (map && mapContainerRef.current) {
      map.resize();
    }
  }, [map]);

  return (
    <div ref={mapContainerRef} id="map" className={mapComponentStyle}>
      {!hideCenterIcon && <MapCenterIcon strokeColor={centerIconStrokeColor} />}
      {isLoading && <div>Loading locations...</div>}
      {error && <div>Error loading locations</div>}
    </div>
  );
});
