import {defineConfig} from "vitepress";
import {version} from "vitepress-theme-teek/es/version";
import {headMenu, vpSocial} from "./global";
import path from 'path'
import {teekThemeConfig} from "./teekThemeConfig.mjs";


// https://vitepress.dev/reference/site-config
export default defineConfig({
    extends: teekThemeConfig,
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
        hostname: "https://blog.charily.top",
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
        lastUpdated:{
            text: '最后更新于',
            formatOptions: {
                year: 'numeric',
                month: 'long',
                day:"numeric",
                hour: '2-digit',
                minute: '2-digit',
                timeZone:'Asia/Shanghai',
            }
        },
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

        socialLinks:vpSocial,
        search: {
            provider: "local",
        },
        editLink:{
            text:"编辑",
            pattern:"#"
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
        resolve:{
            alias:{
                '@gold':path.resolve(__dirname,"./global")
            }
        }
    }
})
