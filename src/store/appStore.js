import { defineStore } from 'pinia'

const storageKey = 'livehub_template_state'

const defaultState = {
  isLoggedIn: false,
  user: {
    id: 'LH-2048',
    name: 'Guest Member',
    email: 'guest@livehub.example',
    avatarSeed: 'guest',
    level: 'Silver 6',
  },
  balance: 1280,
  following: ['aurora-lee'],
  transactions: [
    { id: 'TX-1088', title: 'Welcome bonus', amount: 300, type: 'credit', date: '2026-06-01' },
    { id: 'TX-1089', title: 'Gift sent: Neon Rose', amount: -60, type: 'debit', date: '2026-06-03' },
    { id: 'TX-1090', title: 'Coin Pack UI demo', amount: 600, type: 'credit', date: '2026-06-05' },
  ],
}

function loadState() {
  const saved = localStorage.getItem(storageKey)
  return saved ? JSON.parse(saved) : defaultState
}

export const useAppStore = defineStore('app', {
  state: () => loadState(),
  actions: {
    persist() {
      localStorage.setItem(storageKey, JSON.stringify(this.$state))
    },
    login(payload) {
      this.isLoggedIn = true
      this.user = {
        ...this.user,
        name: payload.name || 'LiveHub Member',
        email: payload.email || payload.account || this.user.email,
        avatarSeed: payload.email || payload.account || 'member',
      }
      this.persist()
    },
    logout() {
      this.isLoggedIn = false
      this.persist()
    },
    toggleFollow(hostId) {
      this.following = this.following.includes(hostId)
        ? this.following.filter((id) => id !== hostId)
        : [...this.following, hostId]
      this.persist()
    },
    addCoins(pack) {
      this.balance += pack.coins
      this.transactions.unshift({
        id: `TX-${Date.now().toString().slice(-6)}`,
        title: `${pack.label} demo top-up`,
        amount: pack.coins,
        type: 'credit',
        date: new Date().toISOString().slice(0, 10),
      })
      this.persist()
    },
    sendGift(gift, hostName) {
      if (this.balance < gift.price) {
        return false
      }
      this.balance -= gift.price
      this.transactions.unshift({
        id: `TX-${Date.now().toString().slice(-6)}`,
        title: `Gift sent to ${hostName}: ${gift.name}`,
        amount: -gift.price,
        type: 'debit',
        date: new Date().toISOString().slice(0, 10),
      })
      this.persist()
      return true
    },
  },
})
