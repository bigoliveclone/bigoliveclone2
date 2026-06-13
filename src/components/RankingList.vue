<script setup>
import UserAvatar from './UserAvatar.vue'

defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="ranking-list">
    <RouterLink
      v-for="(item, index) in items"
      :key="item.id"
      class="ranking-row"
      :to="item.id.startsWith('fan-') ? '/ranking' : `/profile/${item.id}`"
    >
      <span class="rank-number">{{ index + 1 }}</span>
      <UserAvatar :name="item.name" :tone="item.avatarTone" size="48px" />
      <div class="rank-info">
        <strong>{{ item.name }}</strong>
        <small>{{ item.region }}</small>
      </div>
      <div class="rank-score">{{ item.score }}</div>
    </RouterLink>
  </div>
</template>
