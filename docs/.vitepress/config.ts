import { defineConfig } from 'vitepress'
const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = '../logo.svg'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

import { nav } from "./theme/configs/nav.js"
import { sidebarclincal } from "./theme/configs/sidebarclincal.js"
import { sidebarimmune } from "./theme/configs/sidebarimmune.js"
import { sidebarblood } from "./theme/configs/sidebarblood.js"
import { sidebarcmicroorganism } from "./theme/configs/sidebarcmicroorganism.js"
import { sidebarbiochemical } from "./theme/configs/sidebarbiochemical.js"

import mdItCustomAttrs  from 'markdown-it-custom-attrs'
import callout from 'vitepress-plugin-callout'



export default defineConfig({
    title: '医检考术',
    // titleTemplate:'这是啥',有点小问题，为啥把也xian
    lastUpdated: true,
    description: '分享医学检验考试笔记',
    lang: 'zh-CN',
    base: '/jianyan/',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@vite_js' }],
        ['meta', { name: 'theme-color', content: '#646cff' }],
        ["link", { rel: "stylesheet", href: "//cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },],
        ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
        // ['script', { type: 'text/javascript', src: "//res.wx.qq.com/open/js/jweixin-1.4.0.js" }],
        // ['script', { type: 'text/javascript', src: "//js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.0.1.52.js" }],
        ['script', { type: 'text/javascript', src: "//res.wx.qq.com/open/js/jweixin-1.6.0.js" }],
        ['script', { type: 'text/javascript', src: "//unpkg.com/@dcloudio/uni-webview-js@0.0.3/index.js" }]
],


    markdown:{
        config: (md) => {
            md.use(mdItCustomAttrs, 'image',
                {'data-fancybox': "gallery"});
            md.use(require('markdown-it-sub'));
            md.use(require('markdown-it-sup'));
            md.use(require('markdown-it-footnote'));
            md.use(require('markdown-it-deflist'));
            md.use(callout);
            md.use(require('markdown-it-mark'));
            md.use(require('markdown-it-front-matter'),function(fm){console.log(fm)});
        }
    },
    vue: {
        reactivityTransform: true
    },
    themeConfig: {
        logo: '/logo.svg',
        editLink: {
            text: '为此页提供修改建议',
            pattern: 'https://github.com/vitejs/docs-cn/edit/main/:path'
        },
        lastUpdatedText: "Last Updated",
        // socialLinks: [
        //     { icon: 'twitter', link: 'https://twitter.com/vite_js' },
        //     { icon: 'discord', link: 'https://chat.vitejs.dev' },
        //     { icon: 'github', link: 'https://github.com/vitejs/vite' }
        // ],
        // algolia: {
        //     appId: '7H67QR5P0A',
        //     apiKey: 'deaab78bcdfe96b599497d25acc6460e',
        //     indexName: 'vitejs',
        //     searchParameters: {
        //         facetFilters: ['tags:cn']
        //     }
        // },
        // carbonAds: {
        //     code: 'CEBIEK3N',
        //     placement: 'vitejsdev'
        // },
        footer: {
            copyright: '本文档内容版权为检验考术所有，保留所有权利。'
        },
        nav,
        sidebar: {
            '/guide/clinical/': sidebarclincal(),
            '/guide/immune/': sidebarimmune(),
            '/guide/blood/': sidebarblood(),
            '/guide/microorganism/': sidebarcmicroorganism(),
            '/guide/biochemical/': sidebarbiochemical(),
        },

    }
})
