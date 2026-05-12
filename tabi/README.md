# Kimie Travel Profile

旅先で出会った人に見せるためのプロフィールページです。

## ファイル構成

- `index.html`：ページ本体
- `style.css`：デザイン
- `assets/profile-placeholder.svg`：仮プロフィール画像

## 写真を差し替える方法

1. プロフィール写真を `assets` フォルダに入れる
2. ファイル名を `profile.jpg` などにする
3. `index.html` の以下を変更する

```html
<img src="assets/profile-placeholder.svg" alt="貴美恵（Kimie）のプロフィール写真" class="profile-photo" />
```

例：

```html
<img src="assets/profile.jpg" alt="貴美恵（Kimie）のプロフィール写真" class="profile-photo" />
```

## GitHub Pagesで公開する方法

1. GitHubで新しいリポジトリを作成
2. このフォルダ内のファイルをアップロード
3. GitHubの `Settings` → `Pages` を開く
4. `Build and deployment` の Source を `Deploy from a branch` にする
5. Branch を `main`、folder を `/root` にして保存
6. 表示されたURLにアクセス

## 独自ドメインを使う場合

GitHub Pages の `Custom domain` に取得済みドメインを入力します。
DNS側でGitHub Pages向けのレコード設定が必要です。
