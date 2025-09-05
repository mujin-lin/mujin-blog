import type {TeekConfig} from "vitepress-theme-teek";
import {blogAllPicture, blogSmallPicture, fullImgBanner, partImgBanner, imageLink, teekSocial} from "../../global";
import {footerInfo} from "../../global";
import {Banner} from "vitepress-theme-teek/es/config/interface";

// 文档配置
export const teekDocConfig: TeekConfig = {
    themeEnhance: {
        layoutSwitch: {
            defaultMode: "fullWidth",
        },
    },
    footerInfo:footerInfo,
};

// 博客基础配置
const teekBlogCommonConfig: TeekConfig = {
    teekHome: true,
    vpHome: false,
    wallpaper: {
        enabled: true,
    },
    docAnalysis: {
        createTime: "2025-08-22",
        statistics: {
            provider: "busuanzi",
        },
    },
    codeBlock:{
        enabled: true,
        collapseHeight:1000,
        overlay: true,
    },
    friendLink: {
        // list: [
        //   {
        //     name: "Teeker",
        //     desc: "朝圣的使徒，正在走向编程的至高殿堂！",
        //     avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
        //     link: "http://notes.teek.top/",
        //   },
        //   {
        //     name: "vuepress-theme-vdoing",
        //     desc: "🚀一款简洁高效的VuePress 知识管理&博客 主题",
        //     avatar: "https://doc.xugaoyi.com/img/logo.png",
        //     link: "https://doc.xugaoyi.com/",
        //   },
        //   {
        //     name: "One",
        //     desc: "明心静性，爱自己",
        //     avatar: "https://onedayxyy.cn/img/xyy-touxiang.png",
        //     link: "https://onedayxyy.cn/",
        //   },
        //   {
        //     name: "Hyde Blog",
        //     desc: "人心中的成见是一座大山",
        //     avatar: "https://teek.seasir.top/avatar/avatar.webp",
        //     link: "https://teek.seasir.top/",
        //   },
        //   {
        //     name: "二丫讲梵",
        //     desc: "💻学习📝记录🔗分享",
        //     avatar: "https://wiki.eryajf.net/img/logo.png",
        //     link: " https://wiki.eryajf.net/",
        //   },
        //   {
        //     name: "粥里有勺糖",
        //     desc: "简约风的 VitePress 博客主题",
        //     avatar: "https://theme.sugarat.top/logo.png",
        //     link: "https://theme.sugarat.top/",
        //   },
        //   {
        //     name: "VitePress 快速上手中文教程",
        //     desc: "如果你也想搭建它，那跟我一起做吧",
        //     avatar: "https://avatars.githubusercontent.com/u/90893790?v=4",
        //     link: "https://vitepress.yiov.top/",
        //   },
        //   {
        //     name: "友人A",
        //     desc: "おとといは兎をみたの，昨日は鹿，今日はあなた",
        //     avatar: "http://niubin.site/logo.jpg",
        //     link: "http://niubin.site/",
        //   },
        // ],
        autoScroll: true,
    },
    social: teekSocial,
    footerInfo:footerInfo
};

// 博客默认配置
export const teekBlogConfig: TeekConfig = {
    ...teekBlogCommonConfig,
    banner:partImgBanner,
    //     {
    //     name: "🎉 Mujin Blog",
    //     description: "忙碌的生活里，也要记得给自己一点甜，就像小时候那颗最爱的糖果",
    //     bgStyle: "partImg",
    // },
};

// 博客小图配置
export const teekBlogParkConfig: TeekConfig = {
    ...teekBlogCommonConfig,
    banner: blogSmallPicture,
    //     {
    //     name: "🎉 Mujin Blog",
    //     imgSrc: [`https://bing.img.run/rand.php?t=${Date.now()+Math.round(10)}`,
    //         `https://api.dujin.org/bing/1920.php`,
    //     ],
    //     description: [
    //         "忙碌的生活里，也要记得给自己一点甜，就像小时候那颗最爱的糖果",
    //         "不积跬步无以至千里,不积小流无以成江海。—《劝学》",
    //         "业精于勤荒于嬉,行成于思而毁于随。— 唐·韩愈",
    //     ],
    //     descStyle: "switch",
    // },
    footerGroup: [
        // {
        //     title: "外部链接",
        //     links: [
        //         {name: "示例 1", link: "https://vp.teek.top"},
        //         {name: "示例 2", link: "https://vp.teek.top"},
        //         {name: "示例 3", link: "https://vp.teek.top"},
        //     ],
        // },
        // {
        //     title: "内部链接",
        //     links: [
        //         {name: "快速开始", link: "/guide/quickstart"},
        //         {name: "配置简介", link: "/reference/config"},
        //     ],
        // },
    ],
};

// 博客大图配置
export const teekBlogFullConfig: TeekConfig = {
    ...teekBlogCommonConfig,
    post: {
        coverImgMode: "full",
    },
    banner: fullImgBanner,
    //     {
    //     name: "🎉 Mujin Blog",
    //     bgStyle: "fullImg",
    //     imgSrc: [`https://bing.img.run/rand.php?t=${Date.now()+Math.round(10)}`,
    //         `https://api.dujin.org/bing/1920.php`,
    //         `https://bing.img.run/rand.php?t=${Date.now()+Math.round(10)}`,
    //     ],
    //     description: [
    //         "忙碌的生活里，也要记得给自己一点甜，就像小时候那颗最爱的糖果",
    //         "不积跬步无以至千里,不积小流无以成江海。—《劝学》",
    //         "业精于勤荒于嬉,行成于思而毁于随。— 唐·韩愈",
    //     ],
    //     descStyle: "types",
    // },
    themeEnhance: {
        themeColor: {
            append: [
                {
                    label: "博客扩展主题",
                    tip: "博客扩展主题",
                    options: [
                        {label: "紫罗兰", value: "violet", color: "#7166f0"},
                        {label: "珊瑚粉", value: "coral-pink", color: "#ff6b6b"},
                        {label: "天蓝", value: "sky-blue", color: "#00bbf9"},
                        {label: "蓝绿", value: "blue-green", color: "#00f5d4"},
                        {label: "石板灰", value: "slate-gray", color: "#708090"},
                        {label: "粉红", value: "pink", color: "#f15bb5"},
                        {label: "黄绿", value: "yellow-green", color: "#8ac926"},
                        {label: "橙红", value: "orange-red", color: "#ff9e6b"},
                    ],
                },
            ],
        },
    },
};

// 博客全图配置
export const teekBlogBodyConfig: TeekConfig = {
    ...teekBlogCommonConfig,
    pageStyle: "segment-nav",
    bodyBgImg: {
        imgSrc: imageLink,
    },
    banner: blogAllPicture,
    //     {
    //     name: "🎉 Mujin Blog",
    //     description: [
    //         "忙碌的生活里，也要记得给自己一点甜，就像小时候那颗最爱的糖果",
    //         "不积跬步无以至千里,不积小流无以成江海。—《劝学》",
    //         "业精于勤荒于嬉,行成于思而毁于随。— 唐·韩愈",
    //     ],
    //     descStyle: "types",
    // },
    themeEnhance: {
        layoutSwitch: {
            defaultMode: "original",
        },
    },
};

// 博客卡片配置
export const teekBlogCardConfig: TeekConfig = {
    ...teekBlogCommonConfig,
    post: {
        postStyle: "card",
    },
    homeCardListPosition: "left",
    banner: fullImgBanner,
        // function():Banner{
        // console.log(111,fullImgBanner)
        // return fullImgBanner}.call(this),
        // {
        // name: "🎉 Mujin Blog",
        // bgStyle: "fullImg",
        // imgSrc: [`https://res.abeim.cn/api-bing_img?idx=sj&export=img&t=${Date.now()+Math.round(10)}`,
        //     `https://api.dujin.org/bing/1920.php`,
        //     `https://api.btstu.cn/sjbz/api.php?lx=fengjing&t=${Date.now()+Math.round(10)}`,
        //     `https://www.dmoe.cc/random.php?t=${Date.now()+Math.round(10)}`,
        // ],
        // description: [
        //     "忙碌的生活里，也要记得给自己一点甜，就像小时候那颗最爱的糖果",
        //     "不积跬步无以至千里,不积小流无以成江海。 —— 《劝学》",
        //     "业精于勤荒于嬉,行成于思而毁于随。—— 唐·韩愈",
        // ],
        // descStyle: "types",
        //     imgInterval:5000,
    // },
};
