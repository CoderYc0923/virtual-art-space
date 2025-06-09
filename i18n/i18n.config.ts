import zh from './locales/zh.json'
import en from './locales/en.json'

export default defineI18nConfig(() => ({
    legacy: false, //默认legacy旧api，false使用组合式api
    locale: 'zh',
    fallbackLocale: 'zh',
    //如果没有本地化与浏览器的语言环境匹配，则使用此作为后备
    messages: {
        zh,
        en
    }
}))