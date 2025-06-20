import { locationsData } from '../data/locations';
import type { LocationData } from '../pages/maplibre_sample/types/location';
import apiClient from './apiClient';

export const locationsApi = {
  // ロケーションデータを取得
  async getLocations(): Promise<LocationData[]> {
    // production環境では静的データを返す
    if (process.env.NODE_ENV === 'production') {
      return locationsData;
    }

    try {
      const response = await apiClient.get<LocationData[]>('/locations');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch locations, falling back to static data:', error);
      // エラー時は静的データにフォールバック
      return locationsData;
    }
  },
};