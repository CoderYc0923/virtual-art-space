<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink to="/about" class="nav-link">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">{{ $t('nav.projects') }}</NuxtLink>
          <NuxtLink to="/booking" class="nav-link">{{ $t('nav.booking') }}</NuxtLink>
        </div>
        <div class="language-switch">
          <Select
            v-model="currentLocale"
            :options="languageOptions"
            @change="handleLanguageChange"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Select from './Select.vue'

const { locale, setLocale } = useI18n()
const currentLocale = ref(locale.value)

const languageOptions = [
  { label: 'English', value: 'en' },
  { label: '简体中文', value: 'zh' }
]

// 从 localStorage 获取保存的语言设置
onMounted(() => {
  const savedLocale = localStorage.getItem('user-locale')
  if (savedLocale) {
    currentLocale.value = savedLocale
    setLocale(savedLocale)
  }
})

const handleLanguageChange = (lang) => {
  setLocale(lang)
  localStorage.setItem('user-locale', lang)
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/components/nav.less';
</style> 