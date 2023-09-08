import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/": [
    {
      text: "笔记",
      icon: "blog",
      children: [
        {
          text: "JavaScript",
          prefix: "js/",
          collapsible: true,
          icon: "javascript",
          children: "structure"
        },
        {
          text: "CSS",
          prefix: "css/",
          collapsible: true,
          icon: "css",
          children: "structure"
        },
        {
          text: "Vue",
          prefix: "vue/",
          collapsible: true,
          icon: "vue",
          children: "structure"
        },
      ]
    }
  ],
});
