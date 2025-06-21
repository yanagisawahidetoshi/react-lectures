import maplibregl from 'maplibre-gl';
import { useEffect, useRef, useState } from 'react';
import { locationsApi } from '../../../api/locations';

export const useLocations = (map: maplibregl.Map | null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);

  useEffect(() => {
    if (!map) return;

    const fetchAndAddMarkers = async () => {
      try {
        setIsLoading(true);

        // APIからデータ取得
        const locations = await locationsApi.getLocations();

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
      } catch (error) {
        console.error('Failed to fetch and add markers:', error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndAddMarkers();

    // クリーンアップ関数でマーカーを削除
    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [map]);

  return { isLoading, error };
};
