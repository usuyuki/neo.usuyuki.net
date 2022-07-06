---
title: VitePressを使う
lang: ja-JP
---

[[toc]]

# vitePress

この文章は vitePress で作った.  
これまでひたすらに WordPress を使ってきたが,ちょっと設計思想的にも肌に合わなくなってきたので.
あと,デフォルトで vitePress はおしゃれ.  
さらに, v1.0.0 ということで今風な感じもする.

# textlint を使った

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
