import { defineUserConfig } from "vuepress";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
// import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import series from "./config/sidebar";
import navContainer from "./config/navContainer";
import navbar from "./config/navbar";
import notice from "./config/notice";

export default defineUserConfig({
  title: "爱尔前端博客",
  description: "爱尔前端Api手册、技术博客",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  plugins: [
    mediumZoomPlugin({
      // 配置项
    }),
    prismjsPlugin({
      // 配置项
    }),
    ...navContainer, //自定义 nav 容器
  ],
  port: 1208,
  theme: recoTheme({
    password: [
      "cbe2a69f9c79e5c68448734d1a580dae",
      "1129cdf905e4e68fe0be1022d143ee05",
    ],
    catalogTitle:'文档目录',
    lastUpdatedText: "最后更新时间：",
    autoSetBlogCategories: true,
    // vuePreviewsDir : './.vuepress/vue-previews',
    // autoAddCategoryToNavbar: true,
    autoSetSeries: true,
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "aierDeveloper",
    authorAvatar: "/logo.png",
    docsRepo: "https://github.com/aierdever/aierdever.github.io",
    docsBranch: "master",
    docsDir: "",
    primaryColor: "#187DCF",
    series,
    navbar,
    bulletin: notice

    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
