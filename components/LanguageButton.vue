<template>
  <span class="language-button" @click="handleChangeLanguage">
    {{ LANGUAGE_TYPE_LABEL[currentLocale] }}
  </span>
</template>

<script setup>
import { LANGUAGE_TYPE, LANGUAGE_TYPE_LABEL } from "@/const/enum.ts";

const emit = defineEmits(["change"]);

const { locale, setLocale } = useI18n();
const currentLocale = ref(locale.value);

const handleChangeLanguage = () => {
  const lang = locale.value === LANGUAGE_TYPE.CHINESE ? LANGUAGE_TYPE.ENGLISH : LANGUAGE_TYPE.CHINESE
  currentLocale.value = lang;
  setLocale(lang);
  localStorage.setItem("user-locale", lang);
  emit("change", lang);
};

// 从 localStorage 获取保存的语言设置
onMounted(() => {
  const savedLocale = localStorage.getItem("user-locale");
  if (savedLocale) {
    currentLocale.value = savedLocale;
    setLocale(savedLocale);
  }
});
</script>

<style lang="less" scoped>
@import "@/assets/styles/components/languageButton.less";
</style>
