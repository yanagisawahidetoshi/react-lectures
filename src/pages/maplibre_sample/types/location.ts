export interface LocationData {
  id: number;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}
