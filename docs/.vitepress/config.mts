import {defineConfig} from "vitepress";
import {llmstxt} from "vitepress-plugin-llms";
import {defineTeekConfig} from "vitepress-theme-teek/config";
import {version} from "vitepress-theme-teek/es/version";
import {headMenu} from "./global";

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


const teekConfig = defineTeekConfig({
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
    head: [],
    teekHome: true,
    vpHome: true,
    title: "Mujin Blog",
    teekTheme: true,
    homeCardListPosition: "left",
    social: [],
    features: [],
    footerInfo: {
        theme: {
            show: true,
            name: `Theme By Teek@${version}`,
        },
        icpRecord: {
            name: "蜀ICP备2023038111号",
            link: "https://beian.miit.gov.cn",
            icon: "/img/filing/icp.png",
            iconType: "img"
        }
    },
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
    vitePlugins: {
        sidebarOption: {
            // initItems: false, //这条命令注释后，才会让文档和目录的样式保持一致
            collapsed: true, //打开侧边栏自动收缩功能
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

// https://vitepress.dev/reference/site-config
export default defineConfig({
    extends: teekConfig,
    title: "Mujin Blog",
    description: "Mujin Blog",
    cleanUrls: true,
    ignoreDeadLinks: true,
    markdown: {
        // 开启行号
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true,
        },
        // 更改容器默认值标题
        container: {
            tipLabel: "提示",
            warningLabel: "警告",
            dangerLabel: "危险",
            infoLabel: "信息",
            detailsLabel: "详细信息",
        },
    },
    sitemap: {
        hostname: "https://vp.teek.top",
        transformItems: items => {
            const permalinkItemBak: typeof items = [];
            // 使用永久链接生成 sitemap
            const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
            items.forEach(item => {
                const permalink = permalinks?.map[item.url];
                if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
            });
            return [...items, ...permalinkItemBak];
        },
    },
    themeConfig: {
        logo: "/favicon.ico",
        darkModeSwitchLabel: "主题",
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "返回顶部",
        lastUpdatedText: "上次更新时间",
        outline: {
            level: [2, 4],
            label: "本页导航",
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: headMenu,

        // sidebar: [
        //     {
        //         text: 'Examples',
        //         items: [
        //             {text: 'Markdown Examples', link: '/markdown-examples'},
        //             {text: 'Runtime API Examples', link: '/api-examples'}
        //         ]
        //     }
        // ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/mujin-lin'},
            {icon: 'gitee', link: 'https://gitee.com/mujin-lin'}
        ],
        search: {
            provider: "local",
        }
    },
    vite: {
        server: {
            port: 83,
        },
        // 构建
        build: {
            chunkSizeWarningLimit: 1500, // 限制警告的块大小
        },
    }
})
