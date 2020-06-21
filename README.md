# カレンダーアプリ

## 使用技術

| ソフトウェア | バージョン |
| ------------ | ---------- |
| React        | 16.13.1    |
| Redux        | 4.0.5      |
| Material-UI  | 4.10.1     |

## 機能

・カレンダー描画  
・CRUD 操作

![Jun-21-2020 16-09-34](https://user-images.githubusercontent.com/24975537/85218947-4203a900-b3da-11ea-904c-01287cbbc181.gif)

---

## 環境構築

### Docker

```
docker-compose build
```

#### コンテナ内で`sh`起動

```
docker-compose run --rm front sh
```

#### コンテナ内で`npm install`を実行して、`front`ディレクトリに`node_modules`ディレクトリを作成

```
npm install
```

### VSCode

・プラグインをインストール（設定は`.vscode`ディレクトリに記述済）  
　・ESLint  
　・Prettier

---

## 起動

```
docker-compose up
```

`localhost:3000`へアクセス
