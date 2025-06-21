import type { LocationData } from '../../maplibre_sample/types/location';

interface LocationListProps {
  locations: LocationData[];
  onEdit: (location: LocationData) => void;
  onDelete: (id: number) => void;
}

export function LocationList({
  locations,
  onEdit,
  onDelete,
}: LocationListProps) {
  if (locations.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        ロケーションがありません
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {locations.map((location) => (
        <div
          key={location.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{location.name}</h3>
              <p className="text-gray-600 mt-1">{location.address}</p>
              <p className="text-sm text-gray-500 mt-2">
                緯度: {location.location.lat.toFixed(6)}, 経度:{' '}
                {location.location.lng.toFixed(6)}
              </p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => onEdit(location)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                編集
              </button>
              <button
                onClick={() => {
                  if (window.confirm(`「${location.name}」を削除しますか？`)) {
                    onDelete(location.id);
                  }
                }}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                削除
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
