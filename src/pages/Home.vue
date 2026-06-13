<script setup>
import { computed, ref } from 'vue'
import BottomNav from '../components/BottomNav.vue'
import LiveCard from '../components/LiveCard.vue'
import TopTabs from '../components/TopTabs.vue'
import { categories, liveStreams } from '../mock/liveData'

const activeCategory = ref('Popular')

const filteredStreams = computed(() => {
  if (activeCategory.value === 'Following') {
    return liveStreams.filter((stream) => stream.id === 'aurora-lee' || stream.id === 'lena-park')
  }
  if (activeCategory.value === 'Nearby') {
    return liveStreams.filter((stream) => stream.tags.includes('Nearby') || stream.region === 'Singapore')
  }
  if (activeCategory.value === 'New') {
    return liveStreams.filter((stream) => stream.tags.includes('New') || stream.tags.includes('Live'))
  }
  return liveStreams
})
</script>

<template>
  <main class="app-shell with-nav">
    <header class="home-header">
      <div>
        <p class="eyebrow">LiveHub Mobile Template</p>
        <h1>Discover live rooms</h1>
      </div>
      <RouterLink class="round-action" to="/login" aria-label="Login">↗</RouterLink>
    </header>

    <TopTabs v-model="activeCategory" :items="categories" />

    <section class="feature-strip">
      <div>
        <span>Featured</span>
        <strong>Premium social live UI for mobile H5 products.</strong>
      </div>
      <RouterLink to="/ranking">View charts</RouterLink>
    </section>

    <section class="live-grid" aria-label="Live streams">
      <LiveCard v-for="stream in filteredStreams" :key="stream.id" :stream="stream" />
    </section>

    <BottomNav />
  </main>
</template>
