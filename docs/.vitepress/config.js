module.exports = {
  lang: "ja",
  title: "neo.usuyuki.net",
  description: "Inspired by xiupos",
  head: [
    [
      "meta",
      { property: "og:image", content: "https://neo.usuyuki.net/img/ogp.jpg" },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/img/logo.png",
      },
    ],
  ],
  themeConfig: {
    repo: "Usuyuki/neo.blog.usuyuki.net",
    logo: "/img/logo.png", // ナビゲーションに表示される画像
    editLinks: true, // footerにページ編集用リンクをつける
    editLinkText: "このページをgithubで編集", // 編集用リンクのテキスト
    docsDir: "docs", // markdownドキュメントが入る場所
    docsBranch: "genkou-beya", // 編集リンクの遷移先ブランチ
    nav: [
      {
        text: "NAVI",
        items: [
          { text: "0. はじめに", link: "/0_docs/" },
          { text: "1. デフォルトmarkdown構文", link: "/1_usefulmd/" },
          { text: "2. markdown-it構文", link: "/1_usefulmd/markdownit" },
          { text: "編集者、管理者一覧", link: "/0_docs/writers" },
        ],
      },
      {
        text: "公式リンク",
        items: [
          {
            text: "VitePress",
            link: "https://vitepress.vuejs.org",
          },
          {
            text: "Vite",
            link: "https://vitejs.dev/",
          },
          {
            text: "Vue",
            link: "https://v3.ja.vuejs.org/",
          },
          {
            text: "github pages",
            link: "https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages",
          },
        ],
      },
      {
        text: "コミュニティ",
        items: [
          {
            text: "vuejs-jp",
            link: "https://vuejs-jp.org/",
          },
        ],
      },
    ],
    "/": [
      { text: "0. はじめに", link: "/0_docs/" },
      { text: "1. デフォルトmarkdown構文", link: "/1_usefulmd/" },
      { text: "2. markdown-it構文", link: "/1_usefulmd/markdownit" },
      { text: "編集者、管理者一覧", link: "/0_docs/writers" },
    ],
  },
};
