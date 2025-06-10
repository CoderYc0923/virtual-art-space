<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-left">
        <NuxtLink to="/" class="nav-title">山之家</NuxtLink>
      </div>
      <div class="nav-right">
        <div class="nav-links">
          <NuxtLink
            :to="nav.path"
            class="nav-link"
            v-for="(nav, nIndex) in navLinks"
            :key="nIndex"
            >{{ $t(nav.title) }}</NuxtLink
          >
        </div>
        <LanguageButton />
      </div>
    </nav>
    <div class="float-button">
      <HamburgerButton v-model="maskVisible" />
    </div>
    <div class="float-nav" v-if="maskVisible">
      <NuxtLink
        :to="nav.path"
        class="float-nav-link"
        v-for="(nav, nIndex) in navLinks"
        :key="nIndex"
        @click="handleClickLink"
        >{{ $t(nav.title) }}</NuxtLink
      >
      <Divide width="50px" class="float-nav-divide" />
    </div>
  </header>
</template>

<script setup>
const maskVisible = ref(false);

const navLinks = [
  {
    path: "/",
    title: "nav.home",
  },
  {
    path: "/about",
    title: "nav.about",
  },
  {
    path: "/projects",
    title: "nav.projects",
  },
  {
    path: "/booking",
    title: "nav.booking",
  },
];

const handleLanguageChange = (lang) => {
  setLocale(lang);
  localStorage.setItem("user-locale", lang);
};

const handleClickLink = () => {
  maskVisible.value = false;
};
</script>

<style lang="less" scoped>
@import "@/assets/styles/components/nav.less";
</style>
