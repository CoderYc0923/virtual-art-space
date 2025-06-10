<template>
  <button
    :class="['hamburger-button', { active: isActive }]"
    @click="handleClick"
    aria-label="菜单"
  >
    <span class="line line1" />
    <span class="line line2" />
  </button>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "click"]);

const isActive = computed(() => props.modelValue);

const handleClick = () => {
  emit("update:modelValue", !isActive.value);
  emit("click");
};
</script>

<style lang="less" scoped>
@import "@/assets/styles/components/hamburgerButton.less";
</style>
