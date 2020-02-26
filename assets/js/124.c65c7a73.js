(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{353:function(e,a,t){"use strict";t.r(a);var s=t(2),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"http-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-service","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP Service")]),e._v(" "),t("p",[e._v("HTTP Service 是云开发为开发者提供的 HTTP 访问服务，让开发者可以通过 HTTP 访问到自己的云开发资源。可以通过 CLI 工具、控制台管理访问域名和云函数访问路径。")]),e._v(" "),t("h2",{attrs:{id:"创建云函数-http-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建云函数-http-service","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建云函数 HTTP Service")]),e._v(" "),t("p",[e._v("您可以通过下面的命令创建云函数 HTTP Service，"),t("code",[e._v("servicePath")]),e._v(" 和 "),t("code",[e._v("functionName")]),e._v(" 必须指定。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cloudbase service:create -p servicePath -f functionName\n")])])]),t("h2",{attrs:{id:"删除-http-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除-http-service","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除 HTTP Service")]),e._v(" "),t("p",[e._v("您可以通过下面的命令删除 HTTP Service，"),t("code",[e._v("servicePath")]),e._v(" 和 "),t("code",[e._v("serviceId")]),e._v(" 至少需要指定一个。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cloudbase service:delete -p servicePath -i serviceId\n")])])]),t("h2",{attrs:{id:"查询-http-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询-http-service","aria-hidden":"true"}},[e._v("#")]),e._v(" 查询 HTTP Service")]),e._v(" "),t("p",[e._v("您可以通过下面的命令列出所有的 HTTP Service，查看它们的基本信息：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cloudbase service:list\n")])])]),t("p",[e._v("您会得到类似下面的输出：")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("┌──────────────────────────────────────┬─────────┬──────────────┬────────────┐\n│                 Id                   │  Path   │ FunctionName │ CreateTime │\n├──────────────────────────────────────┼─────────┼──────────────┼────────────┤\n│ 8a2b6a03-a401-4a64-a4ca-5b27******88 │  /app   │  startApp    │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1576219108")]),e._v(" │\n├──────────────────────────────────────┼─────────┼──────────────┼────────────┤\n│ 6a73841d-b9b7-423a-a99b-7d36******66 │  /game  │  startGame   │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1576480442")]),e._v(" │\n└──────────────────────────────────────┴─────────┴──────────────┴────────────┘\n")])])]),t("h3",{attrs:{id:"设置更多的查询约束条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置更多的查询约束条件","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置更多的查询约束条件")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("-d domain       指定域名    \n-p servicePath  指定 HTTP Service 路径\n-i serviceId    指定 HTTP Service Id\n")])])]),t("h2",{attrs:{id:"绑定-http-service-自定义域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绑定-http-service-自定义域名","aria-hidden":"true"}},[e._v("#")]),e._v(" 绑定 HTTP Service 自定义域名")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("⚠️ 注意事项")]),e._v(" "),t("p",[e._v("绑定自定义域名之前，请先设置您的域名的 CNAME 记录值为 "),t("code",[e._v("envId.service.tcloudbase.com")]),e._v("，"),t("code",[e._v("envId")]),e._v(" 是您的环境 Id。CNAME 记录不存在时会导致域名绑定失败！")])]),e._v(" "),t("p",[e._v("您可以通过下面的命令绑定 HTTP Service 域名：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cloudbase service:domain:bind domain\n")])])]),t("h2",{attrs:{id:"解绑-http-service-自定义域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解绑-http-service-自定义域名","aria-hidden":"true"}},[e._v("#")]),e._v(" 解绑 HTTP Service 自定义域名")]),e._v(" "),t("p",[e._v("您可以通过下面的命令解绑 HTTP Service 域名：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cloudbase service:domain:unbind domain\n")])])]),t("h2",{attrs:{id:"查询-http-service-自定义域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询-http-service-自定义域名","aria-hidden":"true"}},[e._v("#")]),e._v(" 查询 HTTP Service 自定义域名")]),e._v(" "),t("p",[e._v("您可以通过下面的命令列出所有的 HTTP Service 域名，查看它们的基本信息：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cloudbase service:domain:list\n")])])]),t("p",[e._v("您会得到类似下面的输出：")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("┌────────────────────┬────────────┐\n│HTTP Service domain │ CreateTime │\n├────────────────────┼────────────┤\n│ xxx.helloworld.com │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1576483199")]),e._v(" │\n├────────────────────┼────────────┤\n│ yyy.helloworld.com │ "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1576483199")]),e._v(" │\n└────────────────────┴────────────┘\n")])])]),t("h3",{attrs:{id:"设置更多的查询约束条件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置更多的查询约束条件-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置更多的查询约束条件")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("-d domain       指定域名\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);