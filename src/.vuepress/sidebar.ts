import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "笔记",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
