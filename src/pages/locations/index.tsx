import { useState } from 'react';
import { useLocations } from './hooks/useLocations';
import { LocationForm } from './components/LocationForm';
import { LocationList } from './components/LocationList';
import type { LocationData } from '../maplibre_sample/types/location';

export default function LocationsPage() {
  const {
    locations,
    loading,
    error,
    createLocation,
    updateLocation,
    deleteLocation,
  } = useLocations();

  const [showForm, setShowForm] = useState(false);
  const [editingLocation, setEditingLocation] = useState<LocationData | null>(
    null
  );

  const handleCreate = async (name: string, address: string) => {
    await createLocation(name, address);
    setShowForm(false);
  };

  const handleUpdate = async (name: string, address: string) => {
    if (!editingLocation) return;

    await updateLocation(editingLocation.id, name, address);
    setEditingLocation(null);
  };

  const handleEdit = (location: LocationData) => {
    setEditingLocation(location);
    setShowForm(false);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteLocation(id);
    } catch (err) {
      console.error('削除エラー:', err);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingLocation(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">ロケーション管理</h1>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* 新規作成ボタン */}
        {!showForm && !editingLocation && (
          <button
            onClick={() => setShowForm(true)}
            className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            新規作成
          </button>
        )}

        {/* フォーム */}
        {(showForm || editingLocation) && (
          <div className="mb-8">
            <LocationForm
              location={editingLocation}
              onSubmit={editingLocation ? handleUpdate : handleCreate}
              onCancel={handleCancel}
            />
          </div>
        )}

        {/* ロケーション一覧 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">ロケーション一覧</h2>
          <LocationList
            locations={locations}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
