import {studyItem} from "./studyItem";

export const headMenu = [
    {text: "🏠首页", link: "/"},
    {
        text: "指南",
        link: "/guide/intro",
        activeMatch: "/01.指南/",
    },
    {
        text: "资源",
        items: [
            {text: "案例", link: "/case"},
            {text: "常见问题", link: "/theme/qa"},
            {text: "功能拓展", link: "/expand/intro"},
        ],
    },
    {
        text: '📚知识库',
        items: [
            {
                text: `
                <div style="display: flex; align-items: center; gap: 4px;">
                  <img src="/img/menu/runakao.png" alt="" style="width: 16px; height: 16px;">
                  <span>软考</span>
                </div>
                `,
                link: '/ruankao/intro'
            }
        ]
    }
]