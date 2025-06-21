-- Supabaseテーブル作成・初期データ投入SQL

-- 1. locationsテーブルを作成
CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(500) NOT NULL,
  lat DECIMAL(10, 8) NOT NULL,
  lng DECIMAL(11, 8) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. RLS (Row Level Security) を有効化
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- 3. 全ての操作を許可するポリシーを作成（開発用）
CREATE POLICY "Enable all operations for all users" ON locations
  FOR ALL USING (true) WITH CHECK (true);

-- 4. 初期データを投入
INSERT INTO locations (id, name, address, lat, lng) VALUES
  (1, '東京駅', '東京都千代田区丸の内一丁目', 35.6812, 139.7671),
  (2, '東京タワー', '東京都港区芝公園4丁目2-8', 35.6585, 139.7454),
  (3, '東京スカイツリー', '東京都墨田区押上1丁目1-2', 35.7101, 139.8107)
ON CONFLICT (id) DO NOTHING;

-- 5. IDシーケンスを適切な値に設定
SELECT setval('locations_id_seq', (SELECT MAX(id) FROM locations));

-- 6. updated_at自動更新のためのトリガー関数を作成
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 7. updated_atを自動更新するトリガーを作成
DROP TRIGGER IF EXISTS update_locations_updated_at ON locations;
CREATE TRIGGER update_locations_updated_at
  BEFORE UPDATE ON locations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 8. インデックスを作成（パフォーマンス向上）
CREATE INDEX IF NOT EXISTS idx_locations_name ON locations(name);
CREATE INDEX IF NOT EXISTS idx_locations_coordinates ON locations(lat, lng);