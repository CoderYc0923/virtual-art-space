<template>
  <div id="app" :class="{ 'font-en': currentLang === 'en' }">
    <TheHeader />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TheHeader from '@/components/TheHeader.vue'

const { locale } = useI18n()
const currentLang = computed(() => locale.value)
</script>

<style lang="less">
@import '@/assets/styles/main.less';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
