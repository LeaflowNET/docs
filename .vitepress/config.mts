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
      message: '粤ICP备2025440018号'
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
          { text: '快速开始', link: '/quick-start/register-account' },
          { text: '合作伙伴', link: '/partners' },
          { text: '隐私政策', link: '/privacy-policy' },
          { text: '服务协议', link: '/terms-of-service' }
        ],
        sidebar: [
          {
            text: '🚀 快速开始',
            items: [
              { text: '👤 注册帐号', link: '/quick-start/register-account' },
              { text: '💰 计费规则', link: '/quick-start/billing-rules' },
              { text: '🌐 创建可用区', link: '/quick-start/create-availability-zone' }
            ]
          },
          {
            text: '📖 关于 Leaflow',
            items: [
              { text: '🤝 合作伙伴', link: '/partners' },
              { text: '🔒 隐私政策', link: '/privacy-policy' },
              { text: '📋 服务协议', link: '/terms-of-service' }
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
          { text: 'Quick Start', link: '/en/quick-start/register-account' },
          { text: 'Partners', link: '/en/partners' },
          { text: 'Privacy Policy', link: '/en/privacy-policy' },
          { text: 'Terms of Service', link: '/en/terms-of-service' }
        ],
        sidebar: [
          {
            text: '🚀 Quick Start',
            items: [
              { text: '👤 Register Account', link: '/en/quick-start/register-account' },
              { text: '💰 Billing Rules', link: '/en/quick-start/billing-rules' },
              { text: '🌐 Create Availability Zone', link: '/en/quick-start/create-availability-zone' }
            ]
          },
          {
            text: '📖 About Leaflow',
            items: [
              { text: '🤝 Partners', link: '/en/partners' },
              { text: '🔒 Privacy Policy', link: '/en/privacy-policy' },
              { text: '📋 Terms of Service', link: '/en/terms-of-service' }
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
