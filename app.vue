<template>
  <div id="app" :class="{ 'font-en': locale === 'en' }">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

</script>

<style lang="less">
@import '@/assets/styles/main.less';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
