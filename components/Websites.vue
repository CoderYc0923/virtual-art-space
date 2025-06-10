<template>
  <div class="websites">
    <img :src="website.icon" @click="handleOpenUrl(website.path)" v-for="(website, index) in websiteList" :key="index"/>
  </div>
</template>

<script setup>
import Instagram from "@/assets/svg/instagram.svg";
import Redbook from "@/assets/svg/redbook.svg";
import Weibo from "@/assets/svg/weibo.svg";

const websiteList = [
  {
    icon: Instagram,
    path: "https://www.instagram.com/tu1ko0o0_ss/",
  },
  {
    icon: Redbook,
    path: "https://www.xiaohongshu.com/user/profile/5f3e257100000000010070c5",
  },
  {
    icon: Weibo,
    path: "https://weibo.com/u/5655409705",
  },
];

const handleOpenUrl = (url) => {
    window.open(url, '_blank')
}

</script>

<style lang="less" scoped>
@import "@/assets/styles/components/websites.less";
</style>
