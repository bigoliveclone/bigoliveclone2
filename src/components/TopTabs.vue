<script setup>
defineProps({
  items: { type: Array, required: true },
  modelValue: { type: String, required: true },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="top-tabs" role="tablist">
    <button
      v-for="item in items"
      :key="item"
      class="tab-button"
      :class="{ active: item === modelValue }"
      type="button"
      @click="$emit('update:modelValue', item)"
    >
      {{ item }}
    </button>
  </div>
</template>
