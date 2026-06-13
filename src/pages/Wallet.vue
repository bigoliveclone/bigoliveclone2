<script setup>
import BottomNav from '../components/BottomNav.vue'
import { rechargePacks } from '../mock/liveData'
import { useAppStore } from '../store/appStore'

const appStore = useAppStore()
</script>

<template>
  <main class="app-shell with-nav">
    <header class="page-header">
      <RouterLink class="back-link" to="/">‹</RouterLink>
      <div>
        <p class="eyebrow">Wallet</p>
        <h1>Coin balance</h1>
      </div>
    </header>

    <section class="balance-card">
      <span>Available coins</span>
      <strong>{{ appStore.balance }}</strong>
      <p>UI only. No payment gateway is connected in this template.</p>
    </section>

    <section class="section-block">
      <h2>Recharge packages</h2>
      <div class="pack-grid">
        <button
          v-for="pack in rechargePacks"
          :key="pack.id"
          class="pack-card"
          type="button"
          @click="appStore.addCoins(pack)"
        >
          <strong>{{ pack.coins }}</strong>
          <span>{{ pack.label }}</span>
          <small>{{ pack.price }}</small>
        </button>
      </div>
    </section>

    <section class="section-block">
      <h2>Transaction records</h2>
      <div class="transaction-list">
        <div v-for="item in appStore.transactions" :key="item.id" class="transaction-row">
          <div>
            <strong>{{ item.title }}</strong>
            <span>{{ item.date }} · {{ item.id }}</span>
          </div>
          <b :class="item.type">{{ item.amount > 0 ? '+' : '' }}{{ item.amount }}</b>
        </div>
      </div>
    </section>

    <BottomNav />
  </main>
</template>
