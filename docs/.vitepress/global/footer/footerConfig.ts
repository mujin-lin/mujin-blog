import {FooterInfo} from "vitepress-theme-teek";
import {version} from "vitepress-theme-teek/es/version";

export const footerInfo:FooterInfo = {
    theme: {
        show: true,
        name: `Theme By Teek@${version}`,
    },
    icpRecord: {
        name: "蜀ICP备2023038111号",
        link: "https://beian.miit.gov.cn",
        iconType: "img"
    }
}