/* eslint-disable prettier/prettier */
import { createContext } from 'react';
import { Map } from 'maplibre-gl';

type MapContextType = {
  map: Map | null;
};

/**
 * Maplibreを使用するためのコンテキスト。
 */
export const MapContext = createContext<MapContextType>({ map: null });
