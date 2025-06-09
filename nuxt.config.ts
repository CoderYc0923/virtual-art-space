// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '简体中文' }
    ],
    defaultLocale: 'zh',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      //自动检测浏览器语言
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', //根路径重定向
    },
    vueI18n: '~/i18n/i18n.config.ts'
  },
  css: [
    '@/assets/styles/main.less'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/styles/variables.less";'
        }
      }
    }
  }
})
