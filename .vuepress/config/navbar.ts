/*
 * @Descripttion:  博客主导航
 * @Email: bujichong@163.com
 * @Date: 2023-03-01 11:06:31
 * @LastEditors: bujichong
 * @LastEditTime: 2023-03-21 16:53:33
 * @Author: bujichong
 */
const navbar = [
    { text: "首页", link: "/", icon: 'Home' },
    { text: "文档首页", link: "/docs/index.html", icon: 'DataCenter'},
    // { text: "分类", link: "/categories/shuoming/1/" },
    // { text: "标签", link: "/tags/shuoming/1/" },
    {
      text: "PC端框架手册",
      link: "/docs/pcwork/index/",
      icon: 'CdArchive',
    },
    {
      text: "uni小程序开发手册",
      link: "/docs/souni/index/",
      icon: 'IbmCloudVpcEndpoints',
    },
    {
      text: "综合文档",
      link: "/docs/market/index/",
      icon: 'CloudSatellite',
    },
    {
      text: "蓝芯浏览器",
      link: "/docs/bluecore/index/",
      icon: 'Explore',
    },
  ];

export default navbar;