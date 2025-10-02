import Teek, {useCopyBanner} from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import MyChart from './components/MyChart.vue'
import {useData} from "vitepress";
import {defineComponent, h} from "vue";
import {initComponent} from 'vitepress-plugin-legend/component'
import 'vitepress-plugin-legend/dist/index.css'

//切换进度条
import {NProgress} from "nprogress-v2/dist/index.js"; // 进度条组件
import "nprogress-v2/dist/index.css"; // 进度条样式
import "vitepress-theme-teek/tk-plus/banner-full-img-scale.scss";

import "./styles/mujin-index.scss"

export default {
    extends: Teek,
    Layout: defineComponent({
        name: "LayoutProvider",
        setup() {
            useCopyBanner();
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
        app.component('MyChart', MyChart)
        // 非SSR环境下配置路由进度条
        // @ts-expect-error
        if (!import.meta.env.SSR) {
            NProgress.configure({showSpinner: false});
            router.onBeforeRouteChange = () => NProgress.start();
            router.onAfterRouteChange = () => {
                setTimeout(() => {
                    NProgress.done();
                }, 100);
            };
        }
    }
};
