import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/": [
    {
      text: "笔记",
      icon: "book",
      children: [
        {
          text: "JavaScript",
          prefix: "js/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "CSS",
          prefix: "css/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Vue",
          prefix: "vue/",
          collapsible: true,
          children: "structure"
        },
      ]
    }
  ],
});
