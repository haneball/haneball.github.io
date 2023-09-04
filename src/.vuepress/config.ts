import { Page, defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "haneball Blog",
  description: "haneball Blog",

  theme,

  plugins: [
    searchProPlugin({
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string,
          formatter: "标签：$content",
        },
      ],
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
