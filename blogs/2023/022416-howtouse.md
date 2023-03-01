---
title: 如何使用这个博客
date: 2023-02-24 16:32
author: bujichong
tags:
 - 说明
categories:
 - 说明
---
## 欢迎使用
欢迎入驻爱尔前端文档博客~
这个博客是采用 [`vuepress 2.0`](https://v2.vuepress.vuejs.org/zh/)创建，整个渲染是基于 `vue3 + vite` 的，
同时，我们集成了最流行的 `vuepress` 主题 [`vuepress-theme-reco`](http://v2.vuepress-reco.recoluan.com/)。

需要说明的是，这个主题 集合了 **博客** 和 **文档** 两个功能。 
书写博客或文档都是采用最流行的`markdown`格式。

**注：** 为了便于生成导航，文档请使用 .md 做文件后缀名。

## 目录
书写博客请放置在 `blogs` 文件夹中，文档请在 `docs` 目录下根据文档类型，建立目录书写存放。

```js
aierdever
 ├── blogs  //博客总目录
 │   ├── 2023 //博客分类文件夹
 │   └── howuse.md
 ├── docs //文档总目录
 │   ├── pcwork //pc框架文档目录
 │   └── souni //souni文档目录
 ├── .vuepress //vuepress 配置目录
 │   ├── config.ts //配置文件
 │   ├── public //存放公共资源文件目录
 │   │   ├── blogs // 博客资源总文件夹
 │   │   ├── docs //文档资源总文件夹
 │   │   │   └── pcwork
 │   │   └── logo.png
 │   ├── render.js  //运行生成侧边栏文件
 │   ├── sidebar.js //存放侧边栏json数据
 │   ├── styles
 │   │   └── index.css
 │   └── vue-previews
 │       ├── demo.ts
 │       └── test.vue
 ├── package.json
 ├── pnpm-lock.yaml
 └── README.md
```

## 图片存放目录

书写博文时，我们经常会有图片或资源需要存放，
为了便于维护和查找，请将资源存放在 `/.vuepress/pubilc/` 中(如上目录结构，已分类)，
博客请在目录中新建文件夹，分类存放。
如：文档 pcwork 的资源我们就放置在 `/.vuepress/pubilc/docs/pcwork`

## 博客书写规范
- 博客请放置在对应年份的文件夹中，文件名为 `月日时.md`，如： `020418.md`，这样博客系统会自动帮收入博客列表中，
- 博客的头部文件请注意正确书写 `Frontmatter`，很多的 `Frontmatter`名称和方式，请[参考官方文档](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html)。
- 注意写好 `tags` 和 `categories`， 会自动根据这些字段分类文章，多个字段，用英文逗号隔开。

```
---
title: 想知道怎么使用这个博客吗？
date: 2023-02-24 16:32
author: bujichong
tags:
 - 说明文档
categories:
 - 说明文档
---
```

## 文档书写规范
- 文档按文件夹放置在 `/.vuepress/pubilc/docs/` 中。
- 根据内容，分类可在文档目录下再建子目录来分类存放，侧导航会根据文件夹来自动分类生成。
- 头文件书写，参考如：
```
---
title: "框架目录"
subSidebar: true
categories:
- pc框架
tags:
- pc框架 , 框架基础
comments: true

---
```

## 在config.ts 中添加主导航

博客是可以自动生成的，但是文档需要添加目录，请在 `/.vuepress/config.ts` 的 navbar 中添加导航，示例如：

```js
navbar: [
    ...
    { text: "soUni", link: "/docs/souni/index.html",
        children: [
            { text: "指南", link: "/docs/souni/frame/index.html" },
            { text: "组件", link: "/docs/souni/components/index.html" },
            { text: "Js", link: "/docs/souni/js/index.html" },
        ],
    },
    ...
]
```

## 生成文档侧边栏目录

文档是不会自动生成侧边栏的，书写文档后请运行下命令生成侧边栏。

```
## npm
npm run sidebar

## yarn
yarn sidebar

## pnpm
pnpm sidebar
```

## 最后

为了更加愉快的书写 文档 和 博客，推荐使用 `Typora`~
