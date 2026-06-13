<script setup>
import BottomNav from '../components/BottomNav.vue'
import UserAvatar from '../components/UserAvatar.vue'
import { useAppStore } from '../store/appStore'

const appStore = useAppStore()
</script>

<template>
  <main class="app-shell with-nav">
    <header class="page-header">
      <div>
        <p class="eyebrow">Profile</p>
        <h1>My center</h1>
      </div>
      <RouterLink class="round-action" to="/settings">⚙</RouterLink>
    </header>

    <section class="user-panel">
      <UserAvatar :name="appStore.user.name" tone="coral" size="72px" />
      <div>
        <h2>{{ appStore.user.name }}</h2>
        <p>ID: {{ appStore.user.id }}</p>
        <span>{{ appStore.user.level }}</span>
      </div>
    </section>

    <section class="menu-list">
      <RouterLink to="/wallet"><span>Wallet</span><strong>{{ appStore.balance }} coins</strong></RouterLink>
      <RouterLink to="/ranking"><span>My following</span><strong>{{ appStore.following.length }}</strong></RouterLink>
      <RouterLink to="/settings"><span>Settings</span><strong>Open</strong></RouterLink>
      <button type="button" @click="appStore.logout">Logout</button>
    </section>

    <RouterLink v-if="!appStore.isLoggedIn" class="primary-button full" to="/login">
      Sign in to save demo state
    </RouterLink>

    <BottomNav />
  </main>
</template>
