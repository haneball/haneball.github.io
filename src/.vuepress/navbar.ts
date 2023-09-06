import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "book",
    prefix: "/posts/",
    children: [
      {
        text: "JavaScript",
        link: "js/10001"
      },
      {
        text: "CSS",
        link: "css/20001"
      },
      {
        text: "Vue",
        link: "vue/30001"
      }
    ],
  },
]);
