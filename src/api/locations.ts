import { locationsData } from '../data/locations';
import type { LocationData } from '../pages/maplibre_sample/types/location';
import apiClient, { supabase } from './apiClient';

export const locationsApi = {
  // ロケーションデータを取得
  async getLocations(): Promise<LocationData[]> {
    // production環境ではSupabaseを使用
    if (import.meta.env.MODE === 'production' && supabase) {
      try {
        const { data, error } = await supabase.from('locations').select('*');

        if (error) {
          console.error('Supabase error:', error);
          return locationsData;
        }

        // Supabaseのフラット構造をLocationData型に変換
        return (data || []).map((item) => ({
          id: item.id,
          name: item.name,
          address: item.address,
          location: {
            lat: item.lat,
            lng: item.lng,
          },
        }));
      } catch (error) {
        console.error(
          'Failed to fetch from Supabase, falling back to static data:',
          error
        );
        return locationsData;
      }
    }

    try {
      const response = await apiClient.get<LocationData[]>('/locations');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch locations:', error);
      // エラー時は静的データにフォールバック
      return locationsData;
    }
  },

  // 単一のロケーションを取得
  async getLocation(id: number): Promise<LocationData> {
    if (import.meta.env.MODE === 'production' && supabase) {
      const { data, error } = await supabase
        .from('locations')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      // Supabaseのフラット構造をLocationData型に変換
      return {
        id: data.id,
        name: data.name,
        address: data.address,
        location: {
          lat: data.lat,
          lng: data.lng,
        },
      };
    }

    const response = await apiClient.get<LocationData>(`/locations/${id}`);
    return response.data;
  },

  // ロケーションを作成
  async createLocation(
    location: Omit<LocationData, 'id'>
  ): Promise<LocationData> {
    if (import.meta.env.MODE === 'production' && supabase) {
      // LocationData型からSupabaseのフラット構造に変換
      const supabaseData = {
        name: location.name,
        address: location.address,
        lat: location.location.lat,
        lng: location.location.lng,
      };

      const { data, error } = await supabase
        .from('locations')
        .insert([supabaseData])
        .select()
        .single();

      if (error) throw error;

      // Supabaseのフラット構造をLocationData型に変換
      return {
        id: data.id,
        name: data.name,
        address: data.address,
        location: {
          lat: data.lat,
          lng: data.lng,
        },
      };
    }

    const response = await apiClient.post<LocationData>('/locations', location);
    return response.data;
  },

  // ロケーションを更新
  async updateLocation(
    id: number,
    location: Partial<LocationData>
  ): Promise<LocationData> {
    if (import.meta.env.MODE === 'production' && supabase) {
      // LocationData型からSupabaseのフラット構造に変換
      const supabaseData: Record<string, string | number> = {};
      if (location.name) supabaseData.name = location.name;
      if (location.address) supabaseData.address = location.address;
      if (location.location) {
        supabaseData.lat = location.location.lat;
        supabaseData.lng = location.location.lng;
      }

      const { data, error } = await supabase
        .from('locations')
        .update(supabaseData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Supabaseのフラット構造をLocationData型に変換
      return {
        id: data.id,
        name: data.name,
        address: data.address,
        location: {
          lat: data.lat,
          lng: data.lng,
        },
      };
    }

    const response = await apiClient.put<LocationData>(
      `/locations/${id}`,
      location
    );
    return response.data;
  },

  // ロケーションを削除
  async deleteLocation(id: number): Promise<void> {
    if (import.meta.env.MODE === 'production' && supabase) {
      const { error } = await supabase.from('locations').delete().eq('id', id);

      if (error) throw error;
      return;
    }

    await apiClient.delete(`/locations/${id}`);
  },
};
