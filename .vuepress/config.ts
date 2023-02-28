import { defineUserConfig } from "vuepress";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
// import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import series from "./config/sidebar";
import navContainer from "./config/navContainer";

export default defineUserConfig({
  title: "爱尔前端文档博客",
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
    autoSetSeries: true,
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "aierDeveloper",
    authorAvatar: "/logo.png",
    docsRepo: "https://github.com/aierdever/aierdever.github.io",
    docsBranch: "master",
    docsDir: "",
    lastUpdatedText: "",
    primaryColor: "#e95600",
    // series 为原 sidebar
    series,
    navbar: [
      { text: "首页", link: "/" },
      { text: "文档导航", link: "/docs/index.html" },
      // { text: "分类", link: "/categories/shuoming/1/" },
      // { text: "标签", link: "/tags/shuoming/1/" },
      {
        text: "PC端框架手册",
        link: "/docs/pcwork/index/",
        // children: [
        //   { text: "首页", link: "/docs/pcwork/" },
        //   { text: "框架基础", link: "/docs/pcwork/base/1.files.html" },
        //   { text: "样式及图标", link: "/docs/pcwork/css/1.grid.html" },
        //   { text: "数据表格", link: "/docs/pcwork/datagrid/1.newgrid.html" },
        //   { text: "表单", link: "/docs/pcwork/form/1.rules.html" },
        //   { text: "弹窗", link: "/docs/pcwork/pop/index.html" },
        //   { text: "其他", link: "/docs/pcwork/other/index.html" },
        // ],
      },
      {
        text: "soUni",
        link: "/docs/souni/index/",
        // children: [
        //   { text: "首页", link: "/docs/souni/" },
        //   { text: "快速上手", link: "/docs/souni/frame/index.html" },
        //   { text: "组件", link: "/docs/souni/components/index.html" },
        //   { text: "Js", link: "/docs/souni/js/index.html" },
        // ],
      },
      // {
      //   text: "文档",
      //   children: [
      //     { text: "PC端开发框架手册", link: "/docs/theme-reco/theme" },
      //     { text: "蓝芯浏览器操作手册", link: "/blogs/other/guide" },
      //     { text: "SoUni开发手册", link: "/blogs/other/guide" },
      //   ],
      // },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },

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
