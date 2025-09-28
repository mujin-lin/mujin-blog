import {FooterInfo} from "vitepress-theme-teek";
import {version} from "vitepress-theme-teek/es/version";

export const footerInfo:FooterInfo = {
    // topMessage:[
    //     `<span><img alt="VitePress" src="https://liuyuyang.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanimals.65eaf6e3.webp&w=750&q=75"><span/>`
    // ],
    theme: {
        show: true,
        name: `Theme By Teek@${version}`,
    },
    icpRecord: {
        name: "蜀ICP备2023038111号",
        link: "https://beian.miit.gov.cn",
        iconType: "img"
    },
    customHtml:`<span id="runtime"></span>`,
}