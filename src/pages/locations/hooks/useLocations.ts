import { useState, useEffect } from 'react';
import { locationsApi } from '../../../api/locations';
import { geocodingApi } from '../../../api/geocoding';
import type { LocationData } from '../../maplibre_sample/types/location';

export function useLocations() {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ロケーション一覧を取得
  const fetchLocations = async () => {
    try {
      setLoading(true);
      const data = await locationsApi.getLocations();
      setLocations(data);
      setError(null);
    } catch (err) {
      setError('ロケーションの取得に失敗しました');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ロケーションを作成
  const createLocation = async (name: string, address: string) => {
    try {
      // 住所から緯度経度を取得
      const coordinates = await geocodingApi.getCoordinatesFromAddress(address);

      if (!coordinates) {
        throw new Error('住所から位置情報を取得できませんでした');
      }

      const newLocation = await locationsApi.createLocation({
        name,
        address,
        location: coordinates,
      });

      setLocations([...locations, newLocation]);
      return newLocation;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'ロケーションの作成に失敗しました';
      setError(message);
      throw err;
    }
  };

  // ロケーションを更新
  const updateLocation = async (id: number, name: string, address: string) => {
    try {
      // 住所が変更された場合は緯度経度を再取得
      const coordinates = await geocodingApi.getCoordinatesFromAddress(address);

      if (!coordinates) {
        throw new Error('住所から位置情報を取得できませんでした');
      }

      const updatedLocation = await locationsApi.updateLocation(id, {
        name,
        address,
        location: coordinates,
      });

      setLocations(
        locations.map((loc) => (loc.id === id ? updatedLocation : loc))
      );
      return updatedLocation;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'ロケーションの更新に失敗しました';
      setError(message);
      throw err;
    }
  };

  // ロケーションを削除
  const deleteLocation = async (id: number) => {
    try {
      await locationsApi.deleteLocation(id);
      setLocations(locations.filter((loc) => loc.id !== id));
    } catch (err) {
      setError('ロケーションの削除に失敗しました');
      throw err;
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return {
    locations,
    loading,
    error,
    createLocation,
    updateLocation,
    deleteLocation,
    refetch: fetchLocations,
  };
}
