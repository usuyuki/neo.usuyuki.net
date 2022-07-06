# Abstract

心動かされるものを見た時に,自分も作りたいって思える人間なので.  
https://neo.usuyuki.net

## Inspired by

https://xiupos.net

# CI

[![文章の校閲](https://github.com/Usuyuki/neo.blog.usuyuki.net/actions/workflows/kouetu.yaml/badge.svg)](https://github.com/Usuyuki/neo.blog.usuyuki.net/actions/workflows/kouetu.yaml)  
[![pages-build-deployment](https://github.com/Usuyuki/neo.blog.usuyuki.net/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Usuyuki/neo.blog.usuyuki.net/actions/workflows/pages/pages-build-deployment)  
[![GitHubPagesへのGitHubActions経由でのVitePressのデプロイ](https://github.com/Usuyuki/neo.blog.usuyuki.net/actions/workflows/deploy.yaml/badge.svg)](https://github.com/Usuyuki/neo.blog.usuyuki.net/actions/workflows/deploy.yaml)

# Development

開発時.

```
yarn docs:dev
```

校閲.

```
yarn docs:lint
```

本番.

```
yarn docs:build
```

# Branch

| ブランチ名 | 役割          | 役割                                                                                                                 |
| ---------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| main       | PR のマージ用 | 記事の作成時にコミット(yarn docs:build 不要)                                                                         |
| gh-pages   | サイト公開用  | main にマージされたら自動で yarn docs:build された dist ディレクトリがコミットされ、公開するためのファイル構成になる |
