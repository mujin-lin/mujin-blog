import {HeadConfig} from "vitepress";

export const headScript: HeadConfig[] = [
    // blog.charily.top 地址的统计
    ["script",
        {
            src: "https://umami.charily.top/script.js",
            "data-website-id": "15bdbbad-a7cf-4e25-9806-45f7e7944a48",
            defer: "defer",
        },
    ],
    // 必应收录
    ["meta",
        {
            name: "msvalidate.01",
            content: "C32F955946B10A7D9FC03D9F850B6532"
        }
    ],
    // mujin-blog.pages.dev 地址的统计
    [ "script",
        {
            src: "https://umami.charily.top/script.js",
            "data-website-id": "d4a31cb9-d187-4d5f-bb0a-5f9016d8db6c",
            defer: "defer",
        }
    ]
]