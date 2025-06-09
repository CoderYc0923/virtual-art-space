<template>
  <div class="select" @click="toggleDropdown" ref="selectRef">
    <span class="selected-option">{{ selectedLabel }}</span>
    <div class="dropdown-menu" v-show="isOpen">
      <div 
        v-for="option in options" 
        :key="option.value"
        class="dropdown-item" 
        :class="{ 
          active: modelValue === option.value,
          'font-en': option.value === 'en'
        }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  options: {
    type: Array,
    required: true,
    // 每个选项应该包含 { label: string, value: string | number }
    validator: (value) => {
      return value.every(option => 
        typeof option === 'object' && 
        'label' in option && 
        'value' in option
      )
    }
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const isOpen = ref(false)
const selectRef = ref(null)

const selectedLabel = computed(() => {
  const selected = props.options.find(option => option.value === props.modelValue)
  return selected ? selected.label : ''
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (event) => {
  if (selectRef.value && !selectRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  emit('update:modelValue', option.value)
  emit('change', option.value)
  isOpen.value = false
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/components/select.less';
</style> 