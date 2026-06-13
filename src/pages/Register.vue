<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../store/appStore'

const router = useRouter()
const appStore = useAppStore()
const form = reactive({ name: '', email: '', password: '' })

function submit() {
  appStore.login({ name: form.name || 'New Member', email: form.email })
  router.push('/user')
}
</script>

<template>
  <main class="auth-page">
    <RouterLink class="back-link light" to="/">‹</RouterLink>
    <section class="auth-card">
      <p class="eyebrow">Start now</p>
      <h1>Create account</h1>
      <form class="auth-form" @submit.prevent="submit">
        <label>
          Display name
          <input v-model="form.name" type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input v-model="form.email" type="email" placeholder="member@example.com" />
        </label>
        <label>
          Password
          <input v-model="form.password" type="password" placeholder="Demo password" />
        </label>
        <button class="primary-button" type="submit">Create Demo Account</button>
      </form>
      <p class="auth-note">Registration is simulated with localStorage.</p>
      <RouterLink class="text-link" to="/login">Already have an account?</RouterLink>
    </section>
  </main>
</template>
