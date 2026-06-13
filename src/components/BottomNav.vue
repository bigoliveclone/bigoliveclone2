<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = [
  { label: 'Home', path: '/', icon: '⌂' },
  { label: 'Ranking', path: '/ranking', icon: '◇' },
  { label: 'Wallet', path: '/wallet', icon: '◉' },
  { label: 'Me', path: '/user', icon: '◌' },
]

const activePath = computed(() => route.path)
</script>

<template>
  <nav class="bottom-nav" aria-label="Primary">
    <RouterLink
      v-for="item in items"
      :key="item.path"
      :to="item.path"
      class="nav-item"
      :class="{ active: activePath === item.path }"
    >
      <span class="nav-icon">{{ item.icon }}</span>
      <span>{{ item.label }}</span>
    </RouterLink>
  </nav>
</template>
