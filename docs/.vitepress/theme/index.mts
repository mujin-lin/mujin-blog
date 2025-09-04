import Teek from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import MyChart from './components/MyChart.vue'
import {useData} from "vitepress";
import {defineComponent, h} from "vue";
import { initComponent } from 'vitepress-plugin-legend/component'
import 'vitepress-plugin-legend/dist/index.css'
// Teek 本地主题包引用（与 Teek 在线主题包引用 二选一）
// 当前引入文件为 scss，需要执行 pnpm add sass，如果不想安装额外依赖，可以直接引入 Teek 已经构建好的 css 文件，请看 https://vp.teek.top/styles-plus.html
// import "@teek/theme-chalk/vp-plus/code-block-mobile.scss";
// import "@teek/theme-chalk/vp-plus/sidebar.scss";
// import "@teek/theme-chalk/vp-plus/nav.scss";
// import "@teek/theme-chalk/vp-plus/aside.scss";
// import "@teek/theme-chalk/vp-plus/doc-h1-gradient.scss";
// import "@teek/theme-chalk/vp-plus/table.scss";
// import "@teek/theme-chalk/vp-plus/mark.scss";
// import "@teek/theme-chalk/vp-plus/blockquote.scss";
// import "@teek/theme-chalk/vp-plus/index-rainbow.scss";
// import "@teek/theme-chalk/vp-plus/doc-fade-in.scss";
// import "@teek/theme-chalk/tk-plus/banner-desc-gradient.scss";
// import "@teek/theme-chalk/tk-plus/home-card-hover.scss";

import "./styles/mujin-index.scss"

export default {
    extends: Teek,
    Layout: defineComponent({
        name: "LayoutProvider",
        setup() {
            const props: Record<string, any> = {};
            const {frontmatter} = useData();

            // 添加自定义 class 逻辑
            if (frontmatter.value?.layoutClass) {
                props.class = frontmatter.value.layoutClass;
            }

            return () => h(TeekLayoutProvider, props);
        },
    }),
    enhanceApp({app, router, siteData}) {
        // ...
        initComponent(app);
        // echarts 图表
        app.component('MyChart',MyChart)
    }
};
