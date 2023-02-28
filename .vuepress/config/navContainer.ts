/*
 * @Descripttion: 自定义容器，用来渲染的导航
 * @Email: bujichong@163.com
 * @Date: 2023-02-28 14:42:25
 * @LastEditors: bujichong
 * @LastEditTime: 2023-02-28 14:44:43
 * @Author: bujichong
 */
import { containerPlugin } from "@vuepress/plugin-container";

const colors = [
  "#e0faff",
  "#e7fff5",
  "#ffe7f0",
  "#e7f2ff",
  "#e7ffe9",
  "#f9f2f5",
  "#fdf2d6",
  "#dbfffa",
];

export default [
  containerPlugin({ //nav 导航容器
    type: "nav",
    render: (tokens, idx, options, env, self) => {
      // console.log(tokens,index,options,env,self);
      const { type, info } = tokens[idx];
      const [customType, title, color] = info.trim().split(" ");
      if (/container\_\w+\_open/g.test(type)) {
        const realC =
          color || colors[Math.floor(colors.length * Math.random())];
        const bgch = `style="background-color:${realC};"`;
        return `<div class="nav-container ${customType}" ${bgch}><h4 class="nav-title"><span class="iconfont ${
          title || "icon-cellbox"
        }"></span></h4>`;
      }
      if (/container\_\w+\_close/g.test(type)) {
        return "</div>";
      }
      return self.renderToken(tokens, idx, options);
    },
  }),
  containerPlugin({//nav 导航组
    type: "nav-group",
    before: (info: string) => {
      return `<div class="nav-group-container">${
        info ? `<h4 class="nav-group-title">${info}</h4>` : ""
      }\n`;
    },
    after: (): string => {
      return "</div>\n";
    },
  }),
];
