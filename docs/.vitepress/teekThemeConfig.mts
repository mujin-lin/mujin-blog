import {defineTeekConfig} from "vitepress-theme-teek/config";
import {friends, rewardConfig} from "./global";
import mathJax3 from "markdown-it-mathjax3";
import {vitepressPluginLegend} from "vitepress-plugin-legend";


const coverImages = [
    "/img/bg/1.webp",
    "/img/bg/2.webp",
    "/img/bg/3.webp",
    "/img/bg/4.webp",
    "/img/bg/5.webp",
    "/img/bg/6.webp",
    "/img/bg/7.webp",
    "/img/bg/8.webp",
    "/img/bg/9.webp",
    "/img/bg/10.webp",
    "/img/bg/11.webp",
    "/img/bg/12.webp",
    "/img/bg/13.webp",
    "/img/bg/14.webp",
    "/img/bg/15.webp",
    "/img/bg/16.webp",
    "/img/bg/17.webp",
    "/img/bg/18.webp",
    "/img/bg/19.webp",
];


export const teekThemeConfig = defineTeekConfig({
    blogger: {
        // 博主信息，显示在首页侧边栏
        avatar: "/img/logo.png",
        shape: "circle", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转
        name: "Mujin",
        slogan: "只要一息尚存，就还有希望",
        circleBgImg: "https://api.dujin.org/bing/1920.php", // 头像圆形背景图
        circleBgMask: false, // 头像圆形背景图是否显示遮罩层
        color: "#fff",
    },
    ignoreDeadLinks:true,
    head: [],
    teekHome: true,
    vpHome: true,
    title: "Mujin Blog",
    teekTheme: true,
    homeCardListPosition: "left",
    social: [],
    features: [],
    // footerInfo: {
    // },
    copyright: {
        createYear: 2025,
        suffix: "Mujin",
    },
    codeBlock: {
        copiedDone: TkMessage => TkMessage.success("复制成功！"),
    },
    post: {
        showCapture: true,
    },
    siteAnalytics: [
        {
            provider: "baidu",
            options: {
                id: "d5ee872d9aa1ef8021f4a3921b2e9c2a",
            },
        },
        {
            provider: "google",
            options: {
                id: "G-K5GNDW3L7K",
            },
        },
    ],
    articleShare: {
        enabled: true, // 是否开启文章链接分享功能
        text: "分享此页面", // 分享按钮文本
        copiedText: "链接已复制", // 复制成功文本
        query: false, // 是否包含查询参数
        hash: false, // 是否包含哈希值
    },
    appreciation:rewardConfig,

    // articleBottomTip: frontmatter => {
    //     if (typeof window === "undefined") return;
    //
    //     const hash = false;
    //     const query = false;
    //     const { origin, pathname, search } = window.location;
    //     const url = `${origin}${frontmatter.permalink ?? pathname}${query ? search : ""}${hash ? location.hash : ""}`;
    //     const author = "Mujin";
    //
    //     return {
    //         type: "tip",
    //         // title: "声明", // 可选
    //         text: `<p>作者：${author}</p>
    //          <p style="margin-bottom: 0">链接：<a href="${decodeURIComponent(url)}" target="_blank">${decodeURIComponent(url)}</a></p>
    //          <p>版权：此文章版权归 ${author} 所有，如有转载，请注明出处!</p>
    //         `,
    //     };
    // },

    // 在每个文章页顶部显示 VitePress 容器添加提示，使用场景如超过半年的文章自动提示文章内容可能已过时
    articleTopTip: (frontmatter, localeIndex, page) => {
        if (frontmatter.sidebar === false){
            return
        }
        const tip: Record<string, string> = {
            type: "warning",
            text: "文章发布较早，内容可能过时，阅读注意甄别。",
        };

        // 大于半年，添加提示
        const longTime = 6 * 30 * 24 * 60 * 60 * 1000;
        if (frontmatter.date && Date.now() - new Date(frontmatter.date).getTime() > longTime) return tip;
    },
    // 文章页底部的最近更新栏配置
    articleUpdate: {
        enabled: true, // 是否启用文章最近更新栏
        limit: 3, // 文章最近更新栏显示数量
    },
    markdown:{
        config:(md)=>{
            md.use(mathJax3);
            vitepressPluginLegend(md, {
                markmap: { showToolbar: true }, // 显示脑图工具栏
                mermaid: {showToolbar:true} // 启用 Mermaid
            })
        },
    },
    // 是否全局启用视图渐入过渡效果
    windowTransition:true,
    // 是否启用侧边栏展开/折叠触发器，点击触发器可以展开/折叠侧边栏。
    sidebarTrigger: true,
    friendLink:friends,
    // 面包屑配置
    breadcrumb: {
        enabled: true, // 是否启用面包屑
        showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
        separator: "/", // 面包屑分隔符
        homeLabel: "首页", // 鼠标悬停首页图标的提示文案
    },
    // 文章默认的作者信息
    // author: {
    //     name: "Mujin", // 作者名称
    //     link: "https://github.com/mujin-lin", // 点击作者名称后跳转的链接
    // },
    // 文章信息分析配置，分别作用在首页和文章页
    articleAnalyze: {
        showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
        dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
        showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
        showAuthor: true, // 是否展示作者
        showCreateDate: true, // 是否展示创建日期
        showUpdateDate: true, // 是否展示更新日期，仅在文章页显示
        showCategory: false, // 是否展示分类
        showTag: false, // 是否展示标签
        // 将文章信息传送到指定位置，仅限在文章页生效，默认在文章页顶部
        // teleport: {
        //   selector: "h1",
        //   position: "after",
        //   className: "h1-bottom-info",
        // },
    },
    // vite:{
    //     plugins:[legend()]
    // },
    vitePlugins: {
        sidebarOption: {
            initItems: false,
            ignoreIndexMd: true,
        },

        autoFrontmatter: true, // 自动生成 frontmatter
        permalinkOption: {
            notFoundDelayLoad: 1000, // 1秒后加载
        },

        // 自动格式formatter插件 添加文章封面图
        autoFrontmatterOption: {
            exclude: { title: true, date: true }, // 排除自动生成字段
            transform: frontmatter => {
                // 如果文件本身存在了 coverImg，则不生成
                if (frontmatter.coverImg) return;

                const list = coverImages;

                const coverImg = list[Math.floor(Math.random() * list.length)];

                const transformResult = { ...frontmatter, coverImg };

                return Object.keys(transformResult).length ? transformResult : undefined;
            },
        },
    },
});