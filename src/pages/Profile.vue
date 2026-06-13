<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from '../components/BottomNav.vue'
import LiveCard from '../components/LiveCard.vue'
import UserAvatar from '../components/UserAvatar.vue'
import { liveStreams } from '../mock/liveData'
import { useAppStore } from '../store/appStore'
import { getStreamById } from '../utils/format'

const route = useRoute()
const appStore = useAppStore()
const host = computed(() => getStreamById(liveStreams, route.params.id))
const isFollowing = computed(() => appStore.following.includes(host.value.id))
</script>

<template>
  <main class="app-shell with-nav profile-page">
    <section class="profile-cover" :class="`cover-${host.coverTone}`">
      <RouterLink class="back-link light" to="/">‹</RouterLink>
    </section>

    <section class="profile-card">
      <UserAvatar :name="host.name" :tone="host.avatarTone" size="86px" />
      <h1>{{ host.name }}</h1>
      <p>ID: {{ host.id }}</p>
      <div class="profile-stats">
        <span><strong>{{ host.fans }}</strong> Fans</span>
        <span><strong>{{ host.following }}</strong> Following</span>
      </div>
      <button class="primary-button" type="button" @click="appStore.toggleFollow(host.id)">
        {{ isFollowing ? 'Following' : 'Follow' }}
      </button>
    </section>

    <section class="section-block">
      <h2>About</h2>
      <p class="body-text">{{ host.bio }}</p>
    </section>

    <section class="section-block">
      <h2>Recent live session</h2>
      <LiveCard :stream="host" />
    </section>

    <BottomNav />
  </main>
</template>
