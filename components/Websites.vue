<template>
  <div class="websites">
    <img :src="website.icon" @click="handleOpenUrl(website.path)" v-for="(website, index) in WEBSITES" :key="index"/>
  </div>
</template>

<script setup>
import { WEBSITES } from "@/const/enum.ts";


const handleOpenUrl = (url) => {
    window.open(url, '_blank')
}

</script>

<style lang="less" scoped>
@import "@/assets/styles/components/websites.less";
</style>
