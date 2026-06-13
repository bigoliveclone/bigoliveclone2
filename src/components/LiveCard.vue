<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import UserAvatar from './UserAvatar.vue'
import { formatViewers } from '../utils/format'

const props = defineProps({
  stream: { type: Object, required: true },
})

const viewerText = computed(() => formatViewers(props.stream.viewers))
</script>

<template>
  <RouterLink class="live-card" :to="`/live/${stream.id}`">
    <div class="live-cover" :class="`cover-${stream.coverTone}`">
      <div class="live-badge">LIVE</div>
      <div class="viewer-pill">{{ viewerText }}</div>
    </div>
    <div class="live-card-body">
      <UserAvatar :name="stream.name" :tone="stream.avatarTone" size="42px" />
      <div class="live-meta">
        <h3>{{ stream.name }}</h3>
        <p>{{ stream.region }} · {{ stream.title }}</p>
        <div class="tag-row">
          <span v-for="tag in stream.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
