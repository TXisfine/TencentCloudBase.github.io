(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{340:function(t,a,e){"use strict";e.r(a);var r=e(2),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("微信小程序是指在微信生态内，无需下载及关注的轻应用，用户可以通过微信的扫一扫或搜索功能进行使用。而使用云开发提供的后台能力，您可以非常方便地进行小程序开发。")]),t._v(" "),e("h2",{attrs:{id:"开通小程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开通小程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 开通小程序")]),t._v(" "),e("p",[t._v("在开发小程序前，您需要先在微信侧开通一个小程序用作开发。而开通小程序则需要先在微信公众平台注册小程序账号，再使用开发者工具创建具体的小程序项目。具体的开发步骤可见 "),e("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/31613",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册小程序账号"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"小程序的结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小程序的结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序的结构")]),t._v(" "),e("p",[t._v("每个小程序主要由两部分构成：主体部分（App）、各个页面。其中主体部分主要用于核心的配置，而各个页面则针对不同的业务。")]),t._v(" "),e("h3",{attrs:{id:"主体部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主体部分","aria-hidden":"true"}},[t._v("#")]),t._v(" 主体部分")]),t._v(" "),e("p",[t._v("主体部分即 App 就是小程序的框架，用于支撑 pages、逻辑层的调用，以及对数据、wxss 等的解析。主体部分主要有以下文件构成：\n"),e("img",{attrs:{src:"https://main.qcloudimg.com/raw/9898290489b5121f10c1b13a0d0d93e3.png",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("app.js：小程序的逻辑文件，用于初始化 App 等。")]),t._v(" "),e("li",[t._v("app.json：小程序的全局配置文件，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等，用于导航、窗口、页面或 HTTP 的请求跳转等。")]),t._v(" "),e("li",[t._v("app.wxss：小程序的公共样式配置，作用于每一个页面。")]),t._v(" "),e("li",[t._v("sitemap.json：用来配置小程序及其页面是否允许被微信索引，可对特定页面的索引进行关闭。")])]),t._v(" "),e("p",[t._v("当完成框架部分后，开发者就可以开始自身业务的开发。")]),t._v(" "),e("h3",{attrs:{id:"页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面")]),t._v(" "),e("p",[t._v("小程序的页面一般由以下文件组成：\n"),e("img",{attrs:{src:"https://main.qcloudimg.com/raw/1b64eb00d38a66787d2d32d09054bc55.png",alt:""}})]),t._v(" "),e("p",[t._v("小程序的页面基本上也遵循 MVC 结构进行构建。即模型（model）－视图（view）－控制器（controller）的设计方法。")]),t._v(" "),e("ul",[e("li",[t._v("js：页面逻辑，相当于控制层（C）；也包括部分的数据（M）。")]),t._v(" "),e("li",[t._v("json：页面配置，配置一些页面展示的数据，充当部分的模型（M）。")]),t._v(" "),e("li",[t._v("wxml：页面结构展示，相当于视图层（V）。")]),t._v(" "),e("li",[t._v("wxss：页面样式表，纯前端，用于辅助 wxml 展示。")])]),t._v(" "),e("h3",{attrs:{id:"其他部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他部分","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他部分")]),t._v(" "),e("p",[t._v("工具配置 project.config.json：用于恢复小程序开发工具的个性化配置。")]),t._v(" "),e("p",[t._v("本文中主要介绍了一些小程序开发的基本概念，更多小程序详情可参考 "),e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 微信小程序官方文档"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"小游戏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小游戏","aria-hidden":"true"}},[t._v("#")]),t._v(" 小游戏")]),t._v(" "),e("p",[t._v("小游戏是小程序的一个类目，用户可即点即玩，无需安装下载。微信团队在小程序环境的基础上提供了 WebGL 接口封装，使渲染能力和性能有大幅度提升。增加了这些能力后，小程序开发者具备了开发游戏的能力。")]),t._v(" "),e("p",[t._v("小游戏虽然是小程序的一个类目，但其文件结构与小程序不同，小游戏仅有两个必要文件：")]),t._v(" "),e("ul",[e("li",[t._v("game.js ：小游戏的入口文件")]),t._v(" "),e("li",[t._v("game.json ：配置文件")])]),t._v(" "),e("p",[t._v("更多小游戏详情可参考 "),e("a",{attrs:{href:"https://developers.weixin.qq.com/minigame/dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信官方文档"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=v.exports}}]);