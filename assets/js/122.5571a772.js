(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{356:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"云存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云存储","aria-hidden":"true"}},[a._v("#")]),a._v(" 云存储")]),a._v(" "),t("p",[a._v("云存储是云开发为用户提供的文件存储能力，用户可以通过云开发提供的 CLI 工具、SDK 对存储进行操作，如上传、下载文件。存储在云存储中的文件默认提供 CDN 加速访问，用户可以快速访问云存储中的文件。")]),a._v(" "),t("h2",{attrs:{id:"路径说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 路径说明")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("localPath")]),a._v(" 为本地文件或文件夹的路径，为 "),t("code",[a._v("目录/文件名")]),a._v(" 的形式，如 "),t("code",[a._v("./index.js")]),a._v("、"),t("code",[a._v("static/css/index.css")]),a._v(" 等。")]),a._v(" "),t("li",[t("code",[a._v("cloudPath")]),a._v(" 为云存储文件或文件夹的相对根目录的路径，为 "),t("code",[a._v("目录/文件名")]),a._v(" 的形式，如 "),t("code",[a._v("index.js")]),a._v("、"),t("code",[a._v("static/css/index.js")]),a._v(" 等，"),t("code",[a._v("cloudPath")]),a._v(" 不需要以 '/' 开头。")])]),a._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("⚠️ 注意事项")]),a._v(" "),t("p",[a._v("Windows 系统中 localPath 为本地路径形式，是系统可以识别的路径，通常使用 "),t("code",[a._v("\\")]),a._v(" 分隔符。"),t("code",[a._v("cloudPath")]),a._v(" 是云端文件路径，均需要使用 "),t("code",[a._v("/")]),a._v(" 分隔符。")])]),a._v(" "),t("h2",{attrs:{id:"上传文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 上传文件")]),a._v(" "),t("p",[a._v("您可以使用下面的命令上传文件/文件夹，当 CLI 检测到 localPath 为文件夹时，会自动上传文件内的所有文件。")]),a._v(" "),t("p",[a._v("当不传入 cloudPath，文件会上传到云端的根目录下，同时文件夹的层次结构会被保留。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase storage:upload localPath cloudPath\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将文件上传到根目录")]),a._v("\ncloudbase storage:upload localPath\n")])])]),t("p",[t("strong",[a._v("部署文件单个文件理论最大值为 50TB，文件数量无限制，具体以实际情况为准。")])]),a._v(" "),t("h2",{attrs:{id:"下载文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载文件")]),a._v(" "),t("p",[a._v("您可以使用下面的命令下载文件/文件夹，需要下载文件夹时，需要指定 "),t("code",[a._v("--dir")]),a._v(" 参数。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载文件")]),a._v("\ncloudbase storage:download cloudPath localPath\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载文件夹")]),a._v("\ncloudbase storage:download cloudPath localPath --dir\n")])])]),t("h2",{attrs:{id:"删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除文件")]),a._v(" "),t("p",[a._v("您可以使用下面的命令删除云端文件/文件夹，需要删除文件夹时，需要指定 "),t("code",[a._v("--dir")]),a._v(" 参数。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除文件")]),a._v("\ncloudbase storage:delete cloudPath\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除文件夹")]),a._v("\ncloudbase storage:delete cloudPath --dir\n")])])]),t("h2",{attrs:{id:"列出文件列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出文件列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 列出文件列表")]),a._v(" "),t("p",[a._v("您可以使用下面的命令列出文件夹下的文件")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase storage:list cloudPath\n")])])]),t("h2",{attrs:{id:"获取文件访问链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取文件访问链接","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取文件访问链接")]),a._v(" "),t("p",[a._v("您可以使用下面的命令获取文件的临时访问链接")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase storage:url cloudPath\n")])])]),t("h2",{attrs:{id:"获取文件简单信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取文件简单信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取文件简单信息")]),a._v(" "),t("p",[a._v("您可以使用下面的命令获取文件的简单信息")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase storage:detail cloudPath\n")])])]),t("h2",{attrs:{id:"获取文件访问权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取文件访问权限","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取文件访问权限")]),a._v(" "),t("p",[a._v("您可以使用下面的命令获取文件的访问权限设置信息")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase storage:get-acl\n")])])]),t("h2",{attrs:{id:"设置文件访问权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置文件访问权限","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置文件访问权限")]),a._v(" "),t("p",[a._v("您可以使用下面的命令设置文件的访问权限")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase storage:set-acl\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);