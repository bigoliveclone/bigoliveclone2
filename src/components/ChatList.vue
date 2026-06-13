<script setup>
defineProps({
  messages: { type: Array, required: true },
})
</script>

<template>
  <div class="chat-list">
    <div v-for="message in messages" :key="message.id" class="chat-line">
      <strong>{{ message.user }}</strong>
      <span>{{ message.text }}</span>
    </div>
  </div>
</template>
