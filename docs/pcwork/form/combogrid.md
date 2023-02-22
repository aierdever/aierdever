---
title: "combogrid下拉表格"
subSidebar: true
categories:
- pc框架
tags:
- pc框架 , 表单
comments: true
---
:::: tip 说明

`combogrid`是`easyUI`的一个很实用的控件，功能完整，快速平台中没有做进一步封装，这里只做常用示例。

更多实例请 [参考这里](http://www.jeasyui.net/demo/494.html)

::::

## 示例代码：

**html方式初始化:**

```html
<select class="form-control easyui-combogrid" style="width:250px" data-options="
  panelWidth: 380,
  idField: 'userName',
  textField: 'realName',
  url: 'json/popgrid.js',
  method: 'get',
  columns: [[
    {field:'userName',title:'用户名',width:80},
    {field:'realName',title:'姓名',width:120},
    {field:'mobile',title:'手机',width:180}
  ]],
  fitColumns: true
">
```

**js方式初始化:**

```js
$('#cc').combogrid({
    delay: 500,//用户输入请求间隙时间
    mode: 'remote',//根据输入向远端请求
    url: 'get_data.php',//请求url
    idField: 'id',//输入框返回value
    textField: 'name',//输入框返回字符
    columns: [[//grid设置
        {field:'userName',title:'用户名',width:80},
        {field:'realName',title:'姓名',width:120},
        {field:'mobile',title:'手机',width:180}
    ]]
});
```

**js方式赋值：**

```js
$('#cc').combogrid('setValue', 6);//setValue

$('#cc').combogrid('setValues', [1,3,21,{id:73,text:'text73'}]);//setValues

$('#cc').combogrid('clear');//清除赋值
```

**数据参考：**

```json
{
    total:54,
    rows:[{
        userName:"lihua",
        realName:"李华",
        sex:"1",
        mobile:"13315113521",
        qq:"2357028767"
        } ]
    }, {
        userName:"raohui",
        realName:"饶慧",
        sex:"2",
        mobile:"13975896807",
        qq:null
        }]
    }]
};
```
