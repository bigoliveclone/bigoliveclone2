<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../store/appStore'

const router = useRouter()
const appStore = useAppStore()
const form = reactive({ account: '', password: '' })

function submit() {
  appStore.login({ account: form.account, name: 'LiveHub Member' })
  router.push('/user')
}
</script>

<template>
  <main class="auth-page">
    <RouterLink class="back-link light" to="/">‹</RouterLink>
    <section class="auth-card">
      <p class="eyebrow">Welcome back</p>
      <h1>Sign in to LiveHub</h1>
      <form class="auth-form" @submit.prevent="submit">
        <label>
          Email or phone
          <input v-model="form.account" type="text" placeholder="member@example.com" />
        </label>
        <label>
          Password
          <input v-model="form.password" type="password" placeholder="Demo password" />
        </label>
        <button class="primary-button" type="submit">Sign In</button>
      </form>
      <div class="social-login">
        <button type="button">Continue with Mail</button>
        <button type="button">Continue with Phone</button>
      </div>
      <p class="auth-note">No real authentication API is connected.</p>
      <RouterLink class="text-link" to="/register">Create a demo account</RouterLink>
    </section>
  </main>
</template>
