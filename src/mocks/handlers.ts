import { http, HttpResponse } from 'msw';

// 場所のデータ
const locations = [
  {
    id: 'tokyo-station',
    name: '東京駅',
    location: {
      lat: 35.6812,
      lng: 139.7671,
    },
    address: '東京都千代田区丸の内一丁目',
  },
  {
    id: 'tokyo-tower',
    name: '東京タワー',
    location: {
      lat: 35.6585,
      lng: 139.7454,
    },
    address: '東京都港区芝公園4丁目2-8',
  },
];

export const handlers = [
  // すべての場所を取得
  http.get('/api/locations', () => {
    return HttpResponse.json(locations);
  }),
];
