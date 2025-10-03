import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leaflow Docs",
  description: "A Vitepress Site",
  
  // 全局主题配置
  themeConfig: {
    search: {
      provider: 'local'
    },
    footer: {
      message: '粤ICP备2025440018号',
      copyright: 'Copyright © 2024 Leaflow'
    }
  },
  
  // 搜索配置
  vite: {
    define: {
      __VUE_PROD_DEVTOOLS__: false
    }
  },
  
  // 国际化配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Leaflow 文档",
      description: "Leaflow 官方文档教程库",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '示例', link: '/markdown-examples' },
          { text: '合作伙伴', link: '/partners' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/markdown-examples' },
              { text: 'Runtime API 示例', link: '/api-examples' }
            ]
          },
          {
            text: '关于我们',
            items: [
              { text: '合作伙伴', link: '/partners' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'qq', link: 'https://jq.qq.com/?_wv=1027&k=582959600'},
          { icon: 'github', link: 'https://github.com/LeaflowNET' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "Leaflow Docs",
      description: "Official Leaflow Documentation",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Examples', link: '/en/markdown-examples' },
          { text: 'Partners', link: '/en/partners' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' }
            ]
          },
          {
            text: 'About Us',
            items: [
              { text: 'Partners', link: '/en/partners' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'qq', link: 'https://jq.qq.com/?_wv=1027&k=582959600'},
          { icon: 'github', link: 'https://github.com/LeaflowNET' }
        ]
      }
    }
  }
})
