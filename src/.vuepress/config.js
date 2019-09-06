// .vuepress/config.js

module.exports = {
    // 网站 Title
    title: '奔跑的肥皂',

    // 网站描述
    description: 'This is my blog',

    // 网站语言
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },

    // 使用的主题
    theme: 'vuepress-theme-meteorlxy',

    plugins: [
        "vuepress-plugin-cat",
        '@vuepress/google-analytics', {
            'ga': 'UA-147310905-1'
        }
    ],
    // 主题配置
    themeConfig: {
        // 主题语言，参考下方 [主题语言] 章节
        lang: 'zh-CN',

        // 个人信息（没有或不想设置的，删掉对应字段即可）
        personalInfo: {
            // 昵称
            nickname: 'dashsoap',

            // 个人简介
            description: '练习时长快一年的前端练习生',

            // 电子邮箱
            email: 'dashsoap1997@gmail.com',

            // 所在地
            location: 'BeiJing City, China',

            // 组织
            organization: ' Ymz Studio ',

            // 头像
            // 设置为外部链接
            avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
            // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
            // avatar: '/img/avatar.jpg',


            // 社交平台帐号信息
            sns: {
                // Github 帐号和链接
                github: {
                    account: 'dashsoap',
                    link: 'https://github.com/dashsoap',
                },

                // // LinkedIn 帐号和链接
                // linkedin: {
                //     account: 'meteorlxy',
                //     link: 'http://www.linkedin.com/in/meteorlxy',
                // },


                // 新浪微博 帐号和链接
                weibo: {
                    account: '@皂皂呢',
                    link: 'https://weibo.com/u/3962389632',
                },

                // 知乎 帐号和链接
                zhihu: {
                    account: '奔跑的肥皂',
                    link: 'https://www.zhihu.com/people/zhou-jing-tian-56',
                },


                // 掘金 帐号和链接
                juejin: {
                    account: 'Dashsoap',
                    link: 'https://juejin.im/user/5c2596046fb9a049f3622ab3',
                },
            },
        },

        // 上方 header 的相关设置
        header: {
            // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
            background: {
                useGeo: true,
            },
            // 是否在 header 显示标题
            showTitle: true,
        },
        // 是否显示文章的最近更新时间
        lastUpdated: true,
        // 顶部导航栏内容
        nav: [
            { text: '首页', link: '/', exact: true },
            { text: '日记', link: '/posts/', exact: false },
        ],

        // 评论配置，参考下方 [页面评论] 章节
        comments: {
            platform: 'github',
            owner: 'Dashsoap',
            repo: 'dashsoap.github.io',
            clientId: 'ab7d5e3f8e1d9e568757',
            clientSecret: 'bc5a3ab8674fe3ae7e91f60a7ad7a4d36a21bd01',
        },

        // 分页配置
        pagination: {
            perPage: 5,
        },

        // 默认页面（可选，默认全为 true）
        defaultPages: {

            home: true,

            posts: true,

        },
    },
}