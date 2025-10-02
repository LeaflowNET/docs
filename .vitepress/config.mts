import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leaflow Docs",
  description: "A Vitepress Site",
  
  // 國際化配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Leaflow 文档",
      description: "Leaflow 官方文档教程库",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '示例', link: '/markdown-examples' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/markdown-examples' },
              { text: 'Runtime API 示例', link: '/api-examples' }
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
          { text: 'Examples', link: '/en/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' }
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
