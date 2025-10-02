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
          { icon: 'github', link: 'https://github.com/LeaflowNET' },
          { 
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Forum</title><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
            }, 
            link: 'https://forum.leaflow.net' 
          },
          { 
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Website</title><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>'
            }, 
            link: 'https://leaflow.net/' 
          }
        ]
      }
    }
  }
})
