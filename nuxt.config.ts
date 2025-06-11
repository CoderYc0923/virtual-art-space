// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { currentLocales } from './configs/i18n'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: currentLocales,
    defaultLocale: 'zh',
    langDir: 'locales/',
    strategy: 'prefix',
    detectBrowserLanguage: {
      //自动检测浏览器语言
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', //根路径重定向
    },
    vueI18n: './configs/i18n.config.ts'
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
  },
  app: {
    head: {
      title: '山之家',
      meta: [
        {
          name: 'keywords', content: '山之家,旅馆,住宿,艺术,古道具,家具,展览'
        },
        {
          name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
        },
      ]
    },
  }
})
