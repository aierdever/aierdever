---
home: true
modules:
  - Banner
  - Blog
  - MdContent
  - Footer
banner:
  heroText: 石火之间
  tagline: 光辉在当下，愿岁月无可回头...
  # heroImage: 'logo.png'
  bgImage: '/homebanner.jpg'
  bgImageStyle:
    margin: 65px auto 0
    height: 400px
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
---

## 分类导航
::: info PC端开发框架手册 
:::
::: info 蓝芯浏览器操作手册 
:::
::: info SoUni开发手册 
:::


@[code-group](@/.vuepress/vue-previews/test.vue)

:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

<!-- 
**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
``` -->
