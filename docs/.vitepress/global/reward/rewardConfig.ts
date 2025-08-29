export const rewardConfig = {
    position: "doc-after",
    options: {
        // buttonHtml: `<button>测试按钮</button>`,
        icon: "weChatPay", // 赞赏图标，内置 weChatPay 和 alipay
        expandTitle: "打赏支持", // 展开标题，支持 HTML
        collapseTitle: "下次一定", // 折叠标题，支持 HTML
        content: `<img src='/pay/wxPay.webp'><img src='/pay/aliPay.webp'>`, // 赞赏内容，支持 HTML
        expand: false, // 是否默认展开，默认 false
    },
}