<script setup>
defineProps({
  name: { type: String, required: true },
  tone: { type: String, default: 'coral' },
  size: { type: String, default: '44px' },
})
</script>

<template>
  <div class="user-avatar" :class="`avatar-${tone}`" :style="{ width: size, height: size }">
    <span>{{ name.slice(0, 1) }}</span>
  </div>
</template>
