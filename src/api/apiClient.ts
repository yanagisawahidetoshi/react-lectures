import axios from 'axios';
import type { LocationData } from '../pages/maplibre_sample/types/location';

const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? undefined  // production環境では静的データを使用
    : 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// レスポンスインターセプター（エラーハンドリング用）
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;