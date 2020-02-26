(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{238:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"借助云开发实现小程序朋友圈的发布与展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#借助云开发实现小程序朋友圈的发布与展示","aria-hidden":"true"}},[e._v("#")]),e._v(" 借助云开发实现小程序朋友圈的发布与展示")]),e._v(" "),a("blockquote",[a("p",[e._v("随着小程序云开发越来越成熟，现在用云开发可以做的事情也越来越多，今天就来带大家实现小程序朋友圈功能。")])]),e._v(" "),a("h2",{attrs:{id:"知识技能点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识技能点","aria-hidden":"true"}},[e._v("#")]),e._v(" 知识技能点")]),e._v(" "),a("ul",[a("li",[e._v("1，小程序云开发")]),e._v(" "),a("li",[e._v("2，小程序云存储")]),e._v(" "),a("li",[e._v("3，小程序云数据库")]),e._v(" "),a("li",[e._v("4，图片大图预览")]),e._v(" "),a("li",[e._v("5，图片选择与删除")])]),e._v(" "),a("h1",{attrs:{id:"先给大家画个发布的流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先给大家画个发布的流程图","aria-hidden":"true"}},[e._v("#")]),e._v(" 先给大家画个发布的流程图")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe57789610316?w=982&h=860&f=png&s=83434",alt:""}}),e._v("\n下面是我们真正存到数据库里的数据。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe57789765a81?w=1240&h=667&f=png&s=195309",alt:""}}),e._v("\n然后我们在朋友圈页只需要请求数据库里的数据，然后展示到页面就如下图所示\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe5778dc4efc0?w=288&h=586&f=png&s=157097",alt:""}}),e._v("\n所以我们接下来就来实现发布和展示的功能")]),e._v(" "),a("h1",{attrs:{id:"发布朋友圈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布朋友圈","aria-hidden":"true"}},[e._v("#")]),e._v(" 发布朋友圈")]),e._v(" "),a("h2",{attrs:{id:"一，首先要创建一个小程序项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一，首先要创建一个小程序项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 一，首先要创建一个小程序项目")]),e._v(" "),a("p",[e._v("这里就不多说了，注意：一定要用自己的appid，所以你需要注册一个小程序（个人的就行）")]),e._v(" "),a("h2",{attrs:{id:"二，创建发布页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二，创建发布页面","aria-hidden":"true"}},[e._v("#")]),e._v(" 二，创建发布页面")]),e._v(" "),a("p",[e._v("我们发布页布局比较简单，一个文字输入框，一个图片展示区域，一个发布按钮。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe5778e1e9119?w=484&h=542&f=png&s=75676",alt:""}}),e._v("\n先把发布页布局wxml贴出来")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<textarea class="desc" placeholder="请输入内容" bindinput="getInput" />\n<view class="iamgeRootAll">\n  <view class="imgRoot" wx:for="{{imgList}}" wx:key="{{index}}" bindtap="ViewImage" data-url="{{imgList[index]}}">\n    <view wx:if="{{imgList.length==(index+1)&& imgList.length<8}}" class="imgItem" bindtap="ChooseImage">\n      <image class="photo" src="../../images/photo.png"></image>\n    </view>\n    <view wx:else class="imgItem" data-index="{{index}}">\n      <image class="img" src=\'{{item}}\' mode=\'aspectFill\'></image>\n      <image class="closeImg" bindtap="DeleteImg" src="../../images/close.png" data-index="{{index}}"></image>\n    </view>\n  </view>\n  \x3c!-- 一开始用来占位 --\x3e\n  <view wx:if="{{imgList.length==0}}" class="imgItem" bindtap="ChooseImage">\n    <image class="photo" src="../../images/photo.png"></image>\n  </view>\n</view>\n\n<button type="primary" bindtap="publish">发布朋友圈</button>\n')])])]),a("p",[e._v("这里唯一的难点，就是下面的图片分布，因为我们每次用户选择的图片个数不固定，这就要去分情况考虑了。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('wx:if="{{imgList.length==(index+1)&& imgList.length<8}}"\n')])])]),a("p",[e._v("这段代码是用来控制我们发布的那个➕ 号的显示与隐藏的。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe5778f2d7f93?w=496&h=520&f=png&s=75067",alt:""}})]),e._v(" "),a("p",[e._v("这个➕号有下面三种情况需要考虑")]),e._v(" "),a("ul",[a("li",[e._v("1，没有添加任何图片时，只显示➕号")]),e._v(" "),a("li",[e._v("2，有图片，但是不满8条时，我们需要展示图片和加号。")]),e._v(" "),a("li",[e._v("3，有8张图片了，加号就要隐藏了。\n仔细看下上面的wxml代码，代码里都有体现。")])]),e._v(" "),a("h1",{attrs:{id:"三，实现图片选择和显示功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三，实现图片选择和显示功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 三，实现图片选择和显示功能")]),e._v(" "),a("p",[e._v("图片选择很简单，就用官方的api即可。实现代码如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  //选择图片\n  ChooseImage() {\n    wx.chooseImage({\n      count: 8 - this.data.imgList.length, //默认9,我们这里最多选择8张\n      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有\n      sourceType: ['album'], //从相册选择\n      success: (res) => {\n        console.log(\"选择图片成功\", res)\n        if (this.data.imgList.length != 0) {\n          this.setData({\n            imgList: this.data.imgList.concat(res.tempFilePaths)\n          })\n        } else {\n          this.setData({\n            imgList: res.tempFilePaths\n          })\n        }\n      }\n    });\n  },\n")])])]),a("p",[e._v("这里单独说明下 8 - "),a("code",[e._v("this.data.imgList.length")]),e._v("。因为我这里规定最多只能上传8张图片。所以用了count8 ,至于后面为什么要减去"),a("code",[e._v("this.data.imgList.length")]),e._v("。主要是我们用户不一定一次选择8张图片，有可能第一次选择2张，第二次选择2张。。。\n所以我们做选择时，每次传入的数量肯定不一样的。而这个"),a("code",[e._v("imgList.length")]),e._v("就是用户已经选择的图片个数。用8减去已选择的个数，就是下次最多能选择的了。")]),e._v(" "),a("p",[e._v("上面代码在选择成功后，会生成一个临时的图片链接。如下图所示，这个链接既可以用来展示我们已经选择的图片，后面的图片上传也要用到。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe5779067bc1e?w=1240&h=653&f=png&s=301063",alt:""}})]),e._v(" "),a("h1",{attrs:{id:"四，实现图片删除功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四，实现图片删除功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 四，实现图片删除功能")]),e._v(" "),a("p",[e._v("我们每张图片的右上角有个删除按钮，点击删除按钮可以实现图片的删除。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe577ce54d687?w=280&h=532&f=png&s=65428",alt:""}}),e._v("\n这里比较简单，把代码贴给大家")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  //删除图片\n  DeleteImg(e) {\n    wx.showModal({\n      title: '要删除这张照片吗？',\n      content: '',\n      cancelText: '取消',\n      confirmText: '确定',\n      success: res => {\n        if (res.confirm) {\n          this.data.imgList.splice(e.currentTarget.dataset.index, 1);\n          this.setData({\n            imgList: this.data.imgList\n          })\n        }\n      }\n    })\n  },\n")])])]),a("h1",{attrs:{id:"五，发布功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五，发布功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 五，发布功能")]),e._v(" "),a("ul",[a("li",[e._v("1，发布之前我们需要先校验下内容和图片是否为空\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe577c1ddb5ed?w=1164&h=1126&f=png&s=184254",alt:""}})]),e._v(" "),a("li",[e._v("2，由于我们发布的时候要保证所有的图片都要上传成功，所以这里我们这么处理。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  const promiseArr = []\n    //只能一张张上传 遍历临时的图片数组\n    for (let i = 0; i < this.data.imgList.length; i++) {\n      let filePath = this.data.imgList[i]\n      let suffix = /\\.[^\\.]+$/.exec(filePath)[0]; // 正则表达式，获取文件扩展名\n      //在每次上传的时候，就往promiseArr里存一个promise，只有当所有的都返回结果时，才可以继续往下执行\n      promiseArr.push(new Promise((reslove, reject) => {\n        wx.cloud.uploadFile({\n          cloudPath: new Date().getTime() + suffix,\n          filePath: filePath, // 文件路径\n        }).then(res => {\n          // get resource ID\n          console.log("上传结果", res.fileID)\n          this.setData({\n            fileIDs: this.data.fileIDs.concat(res.fileID)\n          })\n          reslove()\n        }).catch(error => {\n          console.log("上传失败", error)\n        })\n      }))\n    }\n    //保证所有图片都上传成功\n    Promise.all(promiseArr).then(res => {\n    //图片上传成功了，才会执行到这。。。\n    })\n')])])]),a("p",[e._v("我们这里用Promise来确保所有的图片都上传成功了，才执行后面的操作。")]),e._v(" "),a("h3",{attrs:{id:"把完整的发布代码贴给大家吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把完整的发布代码贴给大家吧","aria-hidden":"true"}},[e._v("#")]),e._v(" 把完整的发布代码贴给大家吧")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * 编程小石头\n * wehchat：2501902696\n */\nlet app = getApp();\nPage({\n  data: {\n    imgList: [],\n    fileIDs: [],\n    desc: ''\n  },\n\n  //获取输入内容\n  getInput(event) {\n    console.log(\"输入的内容\", event.detail.value)\n    this.setData({\n      desc: event.detail.value\n    })\n  },\n\n\n  //选择图片\n  ChooseImage() {\n    wx.chooseImage({\n      count: 8 - this.data.imgList.length, //默认9,我们这里最多选择8张\n      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有\n      sourceType: ['album'], //从相册选择\n      success: (res) => {\n        console.log(\"选择图片成功\", res)\n        if (this.data.imgList.length != 0) {\n          this.setData({\n            imgList: this.data.imgList.concat(res.tempFilePaths)\n          })\n        } else {\n          this.setData({\n            imgList: res.tempFilePaths\n          })\n        }\n      }\n    });\n  },\n  //删除图片\n  DeleteImg(e) {\n    wx.showModal({\n      title: '要删除这张照片吗？',\n      content: '',\n      cancelText: '取消',\n      confirmText: '确定',\n      success: res => {\n        if (res.confirm) {\n          this.data.imgList.splice(e.currentTarget.dataset.index, 1);\n          this.setData({\n            imgList: this.data.imgList\n          })\n        }\n      }\n    })\n  },\n\n  //上传数据\n  publish() {\n    let desc = this.data.desc\n    let imgList = this.data.imgList\n    if (!desc || desc.length < 6) {\n      wx.showToast({\n        icon: \"none\",\n        title: '内容大于6个字'\n      })\n      return\n    }\n    if (!imgList || imgList.length < 1) {\n      wx.showToast({\n        icon: \"none\",\n        title: '请选择图片'\n      })\n      return\n    }\n    wx.showLoading({\n      title: '发布中...',\n    })\n\n    const promiseArr = []\n    //只能一张张上传 遍历临时的图片数组\n    for (let i = 0; i < this.data.imgList.length; i++) {\n      let filePath = this.data.imgList[i]\n      let suffix = /\\.[^\\.]+$/.exec(filePath)[0]; // 正则表达式，获取文件扩展名\n      //在每次上传的时候，就往promiseArr里存一个promise，只有当所有的都返回结果时，才可以继续往下执行\n      promiseArr.push(new Promise((reslove, reject) => {\n        wx.cloud.uploadFile({\n          cloudPath: new Date().getTime() + suffix,\n          filePath: filePath, // 文件路径\n        }).then(res => {\n          // get resource ID\n          console.log(\"上传结果\", res.fileID)\n          this.setData({\n            fileIDs: this.data.fileIDs.concat(res.fileID)\n          })\n          reslove()\n        }).catch(error => {\n          console.log(\"上传失败\", error)\n        })\n      }))\n    }\n    //保证所有图片都上传成功\n    Promise.all(promiseArr).then(res => {\n      wx.cloud.database().collection('timeline').add({\n        data: {\n          fileIDs: this.data.fileIDs,\n          date: app.getNowFormatDate(),\n          createTime: db.serverDate(),\n          desc: this.data.desc,\n          images: this.data.imgList\n        },\n        success: res => {\n          wx.hideLoading()\n          wx.showToast({\n            title: '发布成功',\n          })\n          console.log('发布成功', res)\n          wx.navigateTo({\n            url: '../pengyouquan/pengyouquan',\n          })\n        },\n        fail: err => {\n          wx.hideLoading()\n          wx.showToast({\n            icon: 'none',\n            title: '网络不给力....'\n          })\n          console.error('发布失败', err)\n        }\n      })\n    })\n  },\n})\n")])])]),a("p",[e._v("到这里我们发布的功能就实现了，发布功能就如下面这个流程图所示。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe577c053d12b?w=934&h=782&f=png&s=77077",alt:""}}),e._v("\n我们最终的目的是要把文字和图片链接存到云数据库。把图片文件存到云存储。这就是云开发的方便之处，不用我们编写后台代码，就可以轻松实现后台功能。")]),e._v(" "),a("h1",{attrs:{id:"接下来讲朋友圈展示页。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接下来讲朋友圈展示页。","aria-hidden":"true"}},[e._v("#")]),e._v(" 接下来讲朋友圈展示页。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe577c94652c9?w=492&h=862&f=png&s=291546",alt:""}}),e._v("\n这个页面主要做的就是")]),e._v(" "),a("ul",[a("li",[e._v("1，从云数据库读取数据")]),e._v(" "),a("li",[e._v("2，展示列表数据")])]),e._v(" "),a("h1",{attrs:{id:"_1，读取数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1，读取数据","aria-hidden":"true"}},[e._v("#")]),e._v(" 1，读取数据")]),e._v(" "),a("p",[e._v("这里读取数据挺简单，就是从云数据库读数据，这里我们做了一个排序，就是最新发布的数据在最上面。代码如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wx.cloud.database().collection('timeline')\n      .orderBy('createTime', 'desc') //按发布视频排序\n      .get({\n        success(res) {\n          console.log(\"请求成功\", res)\n          that.setData({\n            dataList: res.data\n          })\n        },\n        fail(res) {\n          console.log(\"请求失败\", res)\n        }\n      })\n")])])]),a("p",[e._v("云数据库的读取也比较简单，有疑问的同学，可参见官方文档。")]),e._v(" "),a("h1",{attrs:{id:"_2，朋友圈列表的展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2，朋友圈列表的展示","aria-hidden":"true"}},[e._v("#")]),e._v(" 2，朋友圈列表的展示")]),e._v(" "),a("p",[e._v("这里也比较简单，直接把布局代码贴给大家。dataList就是我们第一步请求到的数据。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<block wx:for="{{dataList}}" wx:key="index">\n  <view class="itemRoot">\n    <view>\n      <text class="desc">{{item.desc}}</text>\n    </view>\n    <view class="imgRoot">\n      <block class="imgList" wx:for="{{item.fileIDs}}" wx:for-item="itemImg" wx:key="index">\n        <image class="img" src=\'{{itemImg}}\' mode=\'aspectFill\' data-img=\'{{[itemImg,item.fileIDs]}}\' bindtap="previewImg"></image>\n      </block>\n    </view>\n  </view>\n</block>\n')])])]),a("h1",{attrs:{id:"_3，这里还有一个图片预览的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3，这里还有一个图片预览的功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 3，这里还有一个图片预览的功能")]),e._v(" "),a("p",[e._v("功能实现很简单就下面几行代码，但是我们从wxml获取组件上的数据时比较麻烦。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  // 预览图片\n  previewImg: function(e) {\n    let imgData = e.currentTarget.dataset.img;\n    console.log("eeee", imgData[0])\n    console.log("图片s", imgData[1])\n    wx.previewImage({\n      //当前显示图片\n      current: imgData[0],\n      //所有图片\n      urls: imgData[1]\n    })\n  },\n')])])]),a("h1",{attrs:{id:"_4-点击图片时通过-data-获取图片列表和当前图片数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-点击图片时通过-data-获取图片列表和当前图片数据","aria-hidden":"true"}},[e._v("#")]),e._v(" 4,点击图片时通过 data- 获取图片列表和当前图片数据")]),e._v(" "),a("p",[e._v("我们点击组件时，可以通过data- 传递数据，但是一个点击如果像传多条数据呢。这时候可以用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("data-xxx='{{[xxx,xxx]}}'\n")])])]),a("p",[e._v("来传递数据了。如下代码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<block wx:for="{{item.fileIDs}}" wx:key="item2" wx:for-item="item2">\n     <image  src=\'{{item2}}\' data-img=\'{{[item2,item.fileIDs]}}\' mode=\'aspectFill\' bindtap="previewImg"></image>\n</block>\n\n//我们再js里可以接收两个数据\npreviewImg: function(e) {\n    let imgData = e.currentTarget.dataset.img;\n    console.log("item2", imgData[0])\n    console.log("item.fileIDs", imgData[1])\n    //大图预览\n    wx.previewImage({\n      //当前显示图片\n      current: imgData[0],\n      //所有图片\n      urls: imgData[1]\n    })\n},\n')])])]),a("p",[e._v("上面代码就可以实现，一次点击，通过data- 传递多个数据到js里。")]),e._v(" "),a("h2",{attrs:{id:"到这里我们就完整的实现了，朋友圈的发布与展示了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#到这里我们就完整的实现了，朋友圈的发布与展示了","aria-hidden":"true"}},[e._v("#")]),e._v(" 到这里我们就完整的实现了，朋友圈的发布与展示了")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/12/16dbe577c9fa924e?w=480&h=856&f=png&s=226351",alt:""}}),e._v("\n朋友圈展示的比较简陋，后期再抽时间做美化吧。")]),e._v(" "),a("h1",{attrs:{id:"源码链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码链接","aria-hidden":"true"}},[e._v("#")]),e._v(" 源码链接")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/qiushi123/timeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/qiushi123/timeline"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);