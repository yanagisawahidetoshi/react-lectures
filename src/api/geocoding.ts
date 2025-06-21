import axios from 'axios';

interface GeocodeResult {
  geometry: {
    coordinates: [number, number]; // [lng, lat]
  };
  properties: {
    title: string;
  };
}

export const geocodingApi = {
  // 住所から緯度経度を取得
  async getCoordinatesFromAddress(
    address: string
  ): Promise<{ lat: number; lng: number } | null> {
    try {
      // 国土地理院のジオコーディングAPI
      const response = await axios.get<GeocodeResult[]>(
        `https://msearch.gsi.go.jp/address-search/AddressSearch?q=${encodeURIComponent(address)}`
      );

      if (response.data && response.data.length > 0) {
        const [lng, lat] = response.data[0].geometry.coordinates;
        return { lat, lng };
      }

      return null;
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  },
};
