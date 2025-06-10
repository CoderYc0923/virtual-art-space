<template>
  <div class="divide" :style="{ width }"></div>
</template>

<script setup>

const props = defineProps({
  width: {
    type: String,
    required: true
  }
})
</script>

<style lang="less" scoped>
@import "@/assets/styles/components/divide.less";
</style>
