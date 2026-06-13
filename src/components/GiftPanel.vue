<script setup>
import { ref } from 'vue'
import { gifts } from '../mock/liveData'

defineProps({
  balance: { type: Number, required: true },
})

const emit = defineEmits(['close', 'send'])
const selectedGift = ref(gifts[0])
</script>

<template>
  <div class="sheet-mask" @click.self="$emit('close')">
    <section class="gift-panel">
      <header class="sheet-header">
        <div>
          <p>Gift Center</p>
          <strong>{{ balance }} coins</strong>
        </div>
        <button class="icon-button ghost" type="button" @click="$emit('close')">×</button>
      </header>

      <div class="gift-grid">
        <button
          v-for="gift in gifts"
          :key="gift.id"
          type="button"
          class="gift-item"
          :class="{ active: selectedGift.id === gift.id }"
          @click="selectedGift = gift"
        >
          <span class="gift-icon">{{ gift.icon }}</span>
          <strong>{{ gift.name }}</strong>
          <small>{{ gift.price }} coins</small>
        </button>
      </div>

      <button class="primary-button send-button" type="button" @click="emit('send', selectedGift)">
        Send {{ selectedGift.name }}
      </button>
    </section>
  </div>
</template>
