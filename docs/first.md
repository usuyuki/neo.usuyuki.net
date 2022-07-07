---
title: VitePressを使う(2022/7/6)
lang: ja-JP
date: 2022-07-06T02:50:00+09:00"
---

## vitePress

この文章は VitePress で作った.  
これまでひたすらに WordPress を使ってきたが, ちょっと設計思想的にも肌に合わなくなってきたので.
あと,デフォルトで vitePress はおしゃれ.  
さらに, v1.0.0 ということで今風な感じもする.

Vite を使ってるだけあってビルドが爆速.  
なんだかんだ静的サイトジェネレーター初なので, 色々知見も得られてお得だった.  
GitHubActions のすごさを感じた.

## textlint を使った

textlint を使うと文章校正が CI でできる.  
これがすごくて,ら抜きチェックとかもできる.

```js
"max-kanji-continuous-len": {
    "max": 6
},
```

こう書くと,墾田\_永年\_私財法を弾ける.  
![ci_konden_error](/img/articles/first/ci_konden_error.png)

画像が載せられるみたいなので,載せてみる.  
ぽすさんみたいに綺麗な画像ではないが.

![micons](/img/articles/first/micons.jpg)
