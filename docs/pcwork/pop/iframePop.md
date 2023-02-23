---
title: "iframePop 及 closePop"
subSidebar: true
categories:
- pc框架
tags:
- pc框架 , pop
comments: true
---

:::: tip 说明

`$pop.iframePop`基于**layer**包装，
可以帮助我们在任何地方，通过交互弹出一个内嵌页面的窗口，
除自定义参数外，其他参数可以参考 [layer.open](http://www.layui.com/doc/modules/layer.html)。

除了 `layer` 的 

- 

::::

## $pop.iframePop 所有参数及示例

```js
$pop.iframePop('/contacts/url.html');//只设置url，直接默认宽高100%打开页面，标题默认为'提示'

$pop.iframePop({
    title: '集团通讯录-修改',//标题
    content: '/contacts/url.html',//请求地址
    area: ['660px', '250px'],//窗口大小
    postData : {a:1,b:2},//往子页面传值
    end : function(iframeSendData){
      //关闭执行函数，子页面可通过 $pop.closePop 返回参数
    },
    sureback : function (iframeSendData){
      //表单提交| 或成功 执行函数，子页面可通过 $pop.closePop 返回参数
    }
 },'#gridBox');//刷新grid #gridBox

 $pop.iframePop({
    title: '修改状态',//标题
    content: '/contacts/url.html',//请求地址
    area: ['100%', '100%']//窗口全屏
 },['#gridBox','#gridBox2']);//刷新grid #gridBox,#gridBox2，刷新多个grid用数组方式


//子页面获取父页面传值
$store.getPostData();
//{a:1,b:2}

//子页面手动返回成功
$pop.closePop({refreshGrid:true});

```

## $pop.closePop