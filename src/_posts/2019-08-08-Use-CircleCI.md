---
category: 前端
tag: -Web -CI
date: 2019-08-08
title: 使用CircleCI来持续集成你的静态网页
vssue-title: 使用CircleCI来持续集成你的静态网页!
---

在使用自己的域名来访问 Github Page 上踩坑了 顺便一起分享一下

<!-- more -->

## 缘起

最近一直想弄一个自己的博客，来记录自己在前端道路上的学习

无奈技术有限，接触时间也不长，再加之有点点贪玩，就一直搁置

感觉自己的情况应该是有普遍性，也想替后来的同学淌过这些坑，所以只考虑了能 SSR 的方法

于是我有且仅有的一个技术站 `Vue` 不能用了

然后就考虑的`NUXT` + `KOA2` 但是自己开发费事 就想用 github pages

在看文档的时候偶然发现了 [VuePress](https://vuepress.vuejs.org/zh/) 这个项目

发现，哇塞，真好看，我好喜欢这种风格，最后又发现能自定义主题，简直`完美`

最后使用了[meteorlxy](https://github.com/meteorlxy/vuepress-theme-meteorlxy)老哥的主题 还真挺好看的

那么接来下

## 开撸

### 安装主题

创建一个新的项目 `my-blog` ：

```sh
mkdir my-blog
cd my-blog
```

安装 `vuepress` 和 `vuepress-theme-meteorlxy`：

```sh
npm install vuepress vuepress-theme-meteorlxy
```

创建 `src/_posts` 文件夹和 Vuepress 配置文件，项目结构大致为：

```sh
my-blog
├── src # Blog 源文件目录
│   ├── .vuepress # Vuepress 目录
│   │   └── config.js # Vuepress 配置文件
│   └── _posts # 博客文件夹
│       ├── xxx.md
│       ...
└── package.json
```

::: tip
注意，`src/index.md` 或 `src/README.md` 不是必须的，这个主题会自动为你加上首页。
:::

在 `package.json` 加入 `script` 字段：

```json
{
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  }
}
```

### 配置主题

在 `src/.vuepress/config.js` 中配置 Vuepress 和主题：

<details>
<summary>点击展开config.js</summary>

```js
// .vuepress/config.js

module.exports = {
  // 网站 Title
  title: "奔跑的肥皂",

  // 网站描述
  description: "This is my blog",

  // 网站语言
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },

  // 使用的主题
  theme: "vuepress-theme-meteorlxy",

  // 主题配置
  themeConfig: {
    // 主题语言，参考下方 [主题语言] 章节
    lang: "zh-CN",

    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 昵称
      nickname: "dashsoap",

      // 个人简介
      description: "练习时长快一年的前端练习生",

      // 电子邮箱
      email: "dashsoap1997@gmail.com",

      // 所在地
      location: "BeiJing City, China",

      // 组织
      organization: " BeiJing Union University",

      // 头像
      // 设置为外部链接
      avatar: "https://www.meteorlxy.cn/assets/img/avatar.jpg",
      // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      // avatar: '/img/avatar.jpg',

      // 社交平台帐号信息
      sns: {
        // Github 帐号和链接
        github: {
          account: "dashsoap",
          link: "https://github.com/dashsoap"
        },

        // // LinkedIn 帐号和链接
        // linkedin: {
        //     account: 'meteorlxy',
        //     link: 'http://www.linkedin.com/in/meteorlxy',
        // },

        // 新浪微博 帐号和链接
        weibo: {
          account: "@皂皂呢",
          link: "https://weibo.com/u/3962389632"
        },

        // 知乎 帐号和链接
        zhihu: {
          account: "奔跑的肥皂",
          link: "https://www.zhihu.com/people/zhou-jing-tian-56"
        },

        // 掘金 帐号和链接
        juejin: {
          account: "Dashsoap",
          link: "https://juejin.im/user/5c2596046fb9a049f3622ab3"
        }
      }
    },

    // 上方 header 的相关设置
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        useGeo: true
      },
      // 是否在 header 显示标题
      showTitle: true
    },
    // 是否显示文章的最近更新时间
    lastUpdated: true,
    // 顶部导航栏内容
    nav: [
      { text: "首页", link: "/", exact: true },
      { text: "日记", link: "/posts/", exact: false }
    ],

    // 评论配置，参考下方 [页面评论] 章节
    comments: {
      platform: "github",
      owner: "Dashsoap",
      repo: "dashsoap.github.io",
      clientId: "ab7d5e3f8e1d9e568757",
      clientSecret: "bc5a3ab8674fe3ae7e91f60a7ad7a4d36a21bd01"
    },

    // 分页配置
    pagination: {
      perPage: 5
    },

    // 默认页面（可选，默认全为 true）
    defaultPages: {
      home: true,

      posts: true
    }
  }
};
```

</details>

直到这里 我们的博客已经搭建得差不多了

### 开始写博客

创建你的第一篇博文：

```md
<!-- _posts/2019-01-21-hello-world.md -->

---

category: hello
tags:

- world
  date: 2019-01-21
  title: Hello, world!
  vssue-title: Hello, world!

---

这是第一篇博文。

more 上面的内容是摘要，将显示在目录中。

<!-- more -->

more 下面的内容只有浏览这篇文章时才会完全展示，不会显示在目录中。
```

运行相应 `script` 生成你的博客网站：

```sh
# 开发
yarn dev
# 构建
yarn build
```

一直到这里 我们可以运行一下 `yarn dev` 来看看效果了

接下来我们就要把我们的代码推到 `{username}.github.io` 这个仓库去

`git push git@github.com:{username}/{username}.github.io.git dev`

解释一下 为什么推到 dev 分支，因为我们编译出来的 index.html 必须放到 master 的根目录

又不想和自己的开发文件混在一起，就只能这么操作

然后我们在根目录下 创建一个如下的 `deploy.sh` 文件

```sh

# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build --dest dist

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
echo 'dashsoap.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://${token}@${address} master:master
git push -f git@github.com:{username}/{username}.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -


```

然后启动 `sh deploy.sh`

我们就能在{username}.github.io 这个网址下看到自己的博客啦~~
