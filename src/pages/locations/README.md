# Locationsページ

住所から緯度経度を自動取得するCRUD機能を持つロケーション管理ページです。

## 機能

- ロケーションの一覧表示
- 新規ロケーションの作成（住所から緯度経度を自動取得）
- ロケーションの編集（住所変更時に緯度経度を再取得）
- ロケーションの削除

## 使い方

1. json-serverを起動
```bash
npm run mock-server
```

2. 開発サーバーを起動
```bash
npm run dev
```

3. ブラウザで http://localhost:5173/locations にアクセス

## 技術仕様

- **国土地理院API**: 住所から緯度経度を取得
- **json-server**: バックエンドAPIのモック
- **axios**: HTTPクライアント
- **React Hooks**: 状態管理

## ファイル構成

```
src/pages/locations/
├── index.tsx              # メインページコンポーネント
├── hooks/
│   └── useLocations.ts    # ロケーション管理のカスタムフック
└── components/
    ├── LocationForm.tsx   # 作成・編集フォーム
    └── LocationList.tsx   # ロケーション一覧
```