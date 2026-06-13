<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ChatList from '../components/ChatList.vue'
import GiftPanel from '../components/GiftPanel.vue'
import UserAvatar from '../components/UserAvatar.vue'
import { chatMessages, liveStreams } from '../mock/liveData'
import { useAppStore } from '../store/appStore'
import { formatViewers, getStreamById } from '../utils/format'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const stream = computed(() => getStreamById(liveStreams, route.params.id))
const showGiftPanel = ref(false)
const messages = ref(chatMessages)
const draft = ref('')
const floatingHearts = ref([])
const giftBanner = ref('')

const isFollowing = computed(() => appStore.following.includes(stream.value.id))

function addMessage() {
  if (!draft.value.trim()) return
  messages.value.push({ id: Date.now(), user: 'You', text: draft.value.trim() })
  draft.value = ''
}

function likeRoom() {
  const id = Date.now()
  floatingHearts.value.push(id)
  window.setTimeout(() => {
    floatingHearts.value = floatingHearts.value.filter((item) => item !== id)
  }, 1200)
}

function sendGift(gift) {
  const sent = appStore.sendGift(gift, stream.value.name)
  giftBanner.value = sent ? `You sent ${gift.name} to ${stream.value.name}` : 'Not enough coins'
  window.setTimeout(() => {
    giftBanner.value = ''
  }, 1800)
}
</script>

<template>
  <main class="live-room">
    <div class="video-stage" :class="`cover-${stream.coverTone}`">
      <header class="live-topbar">
        <div class="host-chip">
          <UserAvatar :name="stream.name" :tone="stream.avatarTone" size="40px" />
          <div>
            <strong>{{ stream.name }}</strong>
            <span>{{ formatViewers(stream.viewers) }} watching</span>
          </div>
        </div>
        <button
          class="follow-button"
          type="button"
          :class="{ active: isFollowing }"
          @click="appStore.toggleFollow(stream.id)"
        >
          {{ isFollowing ? 'Following' : 'Follow' }}
        </button>
        <button class="icon-button close" type="button" @click="router.push('/')">×</button>
      </header>

      <div class="live-center-title">
        <span>LIVE ROOM</span>
        <h1>{{ stream.title }}</h1>
      </div>

      <div v-if="giftBanner" class="gift-banner">{{ giftBanner }}</div>

      <div class="heart-layer" aria-hidden="true">
        <span v-for="heart in floatingHearts" :key="heart">♥</span>
      </div>

      <ChatList :messages="messages" />

      <footer class="live-toolbar">
        <form class="message-form" @submit.prevent="addMessage">
          <input v-model="draft" type="text" placeholder="Say something..." />
        </form>
        <button class="tool-button" type="button" @click="showGiftPanel = true">Gift</button>
        <button class="like-button" type="button" @click="likeRoom">♥</button>
      </footer>
    </div>

    <GiftPanel
      v-if="showGiftPanel"
      :balance="appStore.balance"
      @close="showGiftPanel = false"
      @send="sendGift"
    />
  </main>
</template>
