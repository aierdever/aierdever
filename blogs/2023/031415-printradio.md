---
title: 单选按钮在打印模式下不显示选中状态的问题
date: 2023-03-14 15:54
author: bujichong
tags:
 - css
categories:
 - css
---

## 问题
arss里的调查问卷，都是单选框，明明有些题是勾选状态，实际确不显示勾选  
因为这个单选框的背景我是自定义过的，怀疑是无法打印背景色造成的，  
上网查了一下，果然有同样问题的，解决有2个：

### 方法1：
- 勾选设置中的选项的背景图形

### :方法2：
```css
/* 强制打印背景颜色/图像 */
* {
	-webkit-print-color-adjust: exact !important; /* Chrome, Safari */
	color-adjust: exact !important; /*Firefox*/
}
```

直接用办法2 解决~ ，火线走起....