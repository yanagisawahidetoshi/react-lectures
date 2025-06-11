import { useContext } from 'react';
import { MapContext } from './MapContext';

/**
 * maplibre-glのMapインスタンスを取得するためのカスタムフック。
 * @returns {MapContextType} - The context value containing the map instance.
 */
export const useMap = () => {
  return useContext(MapContext);
};
