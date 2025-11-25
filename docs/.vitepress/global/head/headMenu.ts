import {about, program, ruankaoItems} from "./navItems";

export const headMenu = [
    {text: "🏠首页", link: "/"},
    {
        text: `<div style="display: flex; align-items: center; gap: 4px;">
                  <img src="https://testingcf.jsdelivr.net/gh/mujin-lin/mujin-blog-static/img/menu/runakao.png" alt="" style="width: 16px; height: 16px;">
                  <span>软考</span>
                </div>
                `,
        items: ruankaoItems
    },
    // {text: "✏️随记", items: notes},
    {text: "🧑🏻‍💻编程技术", items: program},
    {text: "🥂关于", items: about},
]
// {
//     text: "指南",
//     link: "/guide/intro",
//     activeMatch: "/01.指南/",
// },
// {
//     text: "资源",
//     items: [
//         {text: "案例", link: "/case"},
//         {text: "常见问题", link: "/theme/qa"},
//         {text: "功能拓展", link: "/expand/intro"},
//     ],
// },