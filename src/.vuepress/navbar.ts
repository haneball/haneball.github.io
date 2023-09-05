import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "JavaScrpt",
        icon: "pen-to-square",
        prefix: "js/",
        children: [
          { text: "实现 Function 的原生方法", icon: "pen-to-square", link: "10001" },
          { text: "实现 Array 的原生方法", icon: "pen-to-square", link: "10002" },
          { text: "debounce 防抖函数", icon: "pen-to-square", link: "10003" },
          { text: "throttle 节流函数", icon: "pen-to-square", link: "10004" },
          { text: "currying 柯里化函数", icon: "pen-to-square", link: "10005" },
          { text: "deepClone 深拷贝", icon: "pen-to-square", link: "10006" }
        ],
      },
      {
        text: "CSS",
        icon: "pen-to-square",
        prefix: "css/",
        children: [
          { text: "常用 CSS 动画", icon: "pen-to-square", link: "20001" }
        ]
      },
      {
        text: "Vue",
        icon: "pen-to-square",
        prefix: "vue/",
        children: [
          { text: "BackTop 返回顶部", icon: "pen-to-square", link: "30001" }
        ]
      }
    ],
  },
]);
