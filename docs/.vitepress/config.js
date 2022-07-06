export default {
  title: "neo.usuyuki.net",
  description: "Inspired by xiupos",
  markdown: {
    plugins: [
      "@org/foo", // equals to @org/markdown-it-foo if exists
      [
        "markdown-it-bar",
        {
          // provide options here
        },
      ],
    ],
  },
};
