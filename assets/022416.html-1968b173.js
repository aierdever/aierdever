import{_ as i,p as o,q as l,s as n,G as s,t as a,J as t,n as c}from"./framework-d4dfb5a8.js";const p={},r=n("h2",{id:"欢迎使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#欢迎使用","aria-hidden":"true"},"#"),s(" 欢迎使用")],-1),d={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"vuepress 2.0",-1),v=n("code",null,"vue3 + vite",-1),m=n("code",null,"vuepress",-1),k={href:"http://v2.vuepress-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"vuepress-theme-reco",-1),h=t(`<p>需要说明的是，这个主题 集合了 <strong>博客</strong> 和 <strong>文档</strong> 两个功能。 书写博客或文档都是采用最流行的<code>markdown</code>格式。</p><p><strong>注：</strong> 为了便于生成导航，文档请使用 .md 做文件后缀名。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><p>书写博客请放置在 <code>blogs</code> 文件夹中，文档请在 <code>docs</code> 目录下根据文档类型，建立目录书写存放。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>aierdever
 ├── blogs  <span class="token comment">//博客总目录</span>
 │   ├── <span class="token number">2023</span> <span class="token comment">//博客分类文件夹</span>
 │   └── howuse<span class="token punctuation">.</span>md
 ├── docs <span class="token comment">//文档总目录</span>
 │   ├── pcwork <span class="token comment">//pc框架文档目录</span>
 │   └── souni <span class="token comment">//souni文档目录</span>
 ├── <span class="token punctuation">.</span>vuepress <span class="token comment">//vuepress 配置目录</span>
 │   ├── config<span class="token punctuation">.</span>ts <span class="token comment">//配置文件</span>
 │   ├── <span class="token keyword">public</span> <span class="token comment">//存放公共资源文件目录</span>
 │   │   ├── blogs <span class="token comment">// 博客资源总文件夹</span>
 │   │   ├── docs <span class="token comment">//文档资源总文件夹</span>
 │   │   │   └── pcwork
 │   │   └── logo<span class="token punctuation">.</span>png
 │   ├── render<span class="token punctuation">.</span>js  <span class="token comment">//运行生成侧边栏文件</span>
 │   ├── sidebar<span class="token punctuation">.</span>js <span class="token comment">//存放侧边栏json数据</span>
 │   ├── styles
 │   │   └── index<span class="token punctuation">.</span>css
 │   └── vue<span class="token operator">-</span>previews
 │       ├── demo<span class="token punctuation">.</span>ts
 │       └── test<span class="token punctuation">.</span>vue
 ├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
 ├── pnpm<span class="token operator">-</span>lock<span class="token punctuation">.</span>yaml
 └── <span class="token constant">README</span><span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片存放目录" tabindex="-1"><a class="header-anchor" href="#图片存放目录" aria-hidden="true">#</a> 图片存放目录</h2><p>书写博文时，我们经常会有图片或资源需要存放， 为了便于维护和查找，请将资源存放在 <code>/.vuepress/pubilc/</code> 中(如上目录结构，已分类)， 博客请在目录中新建文件夹，分类存放。 如：文档 pcwork 的资源我们就放置在 <code>/.vuepress/pubilc/docs/pcwork</code></p><h2 id="博客书写规范" tabindex="-1"><a class="header-anchor" href="#博客书写规范" aria-hidden="true">#</a> 博客书写规范</h2>`,8),g=n("li",null,[s("博客请放置在对应年份的文件夹中，文件名为 "),n("code",null,"月日时.md"),s("，如： "),n("code",null,"020418.md"),s("，这样博客系统会自动帮收入博客列表中，")],-1),_=n("code",null,"Frontmatter",-1),x=n("code",null,"Frontmatter",-1),f={href:"https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,[s("注意写好 "),n("code",null,"tags"),s(" 和 "),n("code",null,"categories"),s("， 会自动根据这些字段分类文章，多个字段，用英文逗号隔开。")],-1),q=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: 想知道怎么使用这个博客吗？
date: 2023-02-24 16:32
author: bujichong
tags:
 - 说明文档
categories:
 - 说明文档
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文档书写规范" tabindex="-1"><a class="header-anchor" href="#文档书写规范" aria-hidden="true">#</a> 文档书写规范</h2><ul><li>文档按文件夹放置在 <code>/.vuepress/pubilc/docs/</code> 中。</li><li>根据内容，分类可在文档目录下再建子目录来分类存放，侧导航会根据文件夹来自动分类生成。</li><li>头文件书写，参考如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: &quot;框架目录&quot;
subSidebar: true
categories:
- pc框架
tags:
- pc框架 , 框架基础
comments: true

---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在config-ts-中添加主导航" tabindex="-1"><a class="header-anchor" href="#在config-ts-中添加主导航" aria-hidden="true">#</a> 在config.ts 中添加主导航</h2><p>博客是可以自动生成的，但是文档需要添加目录，请在 <code>/.vuepress/config.ts</code> 的 navbar 中添加导航，示例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;soUni&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/souni/index.html&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;指南&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/souni/frame/index.html&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;组件&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/souni/components/index.html&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Js&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/souni/js/index.html&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成文档侧边栏目录" tabindex="-1"><a class="header-anchor" href="#生成文档侧边栏目录" aria-hidden="true">#</a> 生成文档侧边栏目录</h2><p>文档是不会自动生成侧边栏的，书写文档后请运行下命令生成侧边栏。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## npm
npm run sidebar

## yarn
yarn sidebar

## pnpm
pnpm sidebar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>为了更加愉快的书写 文档 和 博客，推荐使用 <code>Typora</code>~</p>`,12);function j(w,E){const e=c("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[s("欢迎入驻爱尔前端文档博客~ 这个博客是采用 "),n("a",d,[u,a(e)]),s("创建，整个渲染是基于 "),v,s(" 的， 同时，我们集成了最流行的 "),m,s(" 主题 "),n("a",k,[b,a(e)]),s("。")]),h,n("ul",null,[g,n("li",null,[s("博客的头部文件请注意正确书写 "),_,s("，很多的 "),x,s("名称和方式，请"),n("a",f,[s("参考官方文档"),a(e)]),s("。")]),y]),q])}const V=i(p,[["render",j],["__file","022416.html.vue"]]);export{V as default};
