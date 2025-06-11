<template>
  <span class="language-button" @click="handleChangeLanguage">
    {{ LANGUAGE_TYPE_LABEL[locale] }}
  </span>
</template>

<script setup>
import { LANGUAGE_TYPE, LANGUAGE_TYPE_LABEL } from "@/const/enum.ts";

const emit = defineEmits(["change"]);

const { locale, setLocale, setLocaleCookie } = useI18n();

const handleChangeLanguage = () => {
  const lang = locale.value === LANGUAGE_TYPE.CHINESE ? LANGUAGE_TYPE.ENGLISH : LANGUAGE_TYPE.CHINESE
  setLocale(lang)
  setLocaleCookie(lang);
  emit("change", lang);
};

</script>

<style lang="less" scoped>
@import "@/assets/styles/components/languageButton.less";
</style>
