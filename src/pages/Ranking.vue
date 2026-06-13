<script setup>
import { computed, ref } from 'vue'
import BottomNav from '../components/BottomNav.vue'
import RankingList from '../components/RankingList.vue'
import TopTabs from '../components/TopTabs.vue'
import { rankingFans, rankingHosts } from '../mock/liveData'

const scope = ref('Daily')
const board = ref('Hosts')
const scopes = ['Daily', 'Weekly', 'Monthly']
const boards = ['Hosts', 'Supporters']

const activeItems = computed(() => (board.value === 'Hosts' ? rankingHosts : rankingFans))
</script>

<template>
  <main class="app-shell with-nav">
    <header class="page-header">
      <RouterLink class="back-link" to="/">‹</RouterLink>
      <div>
        <p class="eyebrow">Ranking</p>
        <h1>Creator charts</h1>
      </div>
    </header>

    <TopTabs v-model="scope" :items="scopes" />

    <div class="segmented-control">
      <button
        v-for="item in boards"
        :key="item"
        type="button"
        :class="{ active: board === item }"
        @click="board = item"
      >
        {{ item }}
      </button>
    </div>

    <section class="podium-card">
      <span>{{ scope }} No. 1</span>
      <strong>{{ activeItems[0].name }}</strong>
      <p>{{ activeItems[0].score }} contribution score</p>
    </section>

    <RankingList :items="activeItems" />
    <BottomNav />
  </main>
</template>
