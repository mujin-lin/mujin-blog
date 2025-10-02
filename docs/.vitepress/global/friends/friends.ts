// FriendLink用于在首页展示一些友链
import {FriendLinkItem} from "vitepress-theme-teek";
import {FriendLink} from "vitepress-theme-teek/es/config/interface";

export const friends: FriendLink = {
    enabled: true, // 是否启用友情链接卡片
    limit: 4, // 一页显示的数量
    // autoScroll: true, // 是否自动滚动
    // scrollSpeed: 100000, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效

    autoPage: true, // 是否自动翻页
    pageSpeed: 30000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    titleClick: (router) => router.go("/about/navigation"), // 查看更多友链

    // 友情链接数据列表
    list: [

        {
            name: "Teeker",
            desc: "朝圣的使徒，正在走向编程的至高殿堂！",
            link: "http://notes.teek.top/",
            avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
            alt: "Teek 作者"
        },
        {
            name: "One",
            desc: "明心静性，爱自己",
            link: "https://onedayxyy.cn/",
            avatar: "https://onedayxyy.cn/img/xyy.webp",
            alt: "Teek 手把手教程"
        },
        {
            name: "威威",
            desc: "人心中的成见是一座大山~",
            link: "https://dl-web.top/",
            avatar: "https://dl-web.top/avatar/avatar.svg",
            alt: "Teek 贡献大佬"
        },
    ],
    // autoScroll: true,
};
