import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "blog",
    prefix: "/posts/",
    children: [
      {
        text: "JavaScript",
        icon: "javascript",
        link: "js/10001"
      },
      {
        text: "CSS",
        icon: "css",
        link: "css/20001"
      },
      {
        text: "Vue",
        icon: "vue",
        link: "vue/30001"
      }
    ],
  },
]);
