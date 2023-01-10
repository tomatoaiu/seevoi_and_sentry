# Seevoi と Sentry の組み合わせテスト環境

## 必要なもの
- [Node.js](https://nodejs.org/ja/)
- [Seevoi](https://seebel.co/)
- [Sentry](https://sentry.io/welcome/)

## 使い方
1. .envファイルを作成

SENTRY_URLの値に、Sentryで利用するDSNの値を記入。
SEEVOI_WORKSPACE_IDの値に、Seevoiで利用するworkspaceのidを記入。
※ xには任意の長さの適当な文字列が入ります。

```shell
SENTRY_URL=https://xxx@xxx.ingest.sentry.io/xxx
SEEVOI_WORKSPACE_ID=xx-xx-xx-xx
```

2. shellで `npm i` を実行
3. shellで `npm run start` を実行
4. http://localhost:1234 をブラウザを開く
5. ボタンをクリック
6. Sentryのissueを開く (https://sentry.io/organizations/{あなたのプロジェクトID}/issues/?referrer=sidebar)
7. 確認し、Clicked Button
