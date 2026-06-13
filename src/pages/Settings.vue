<template>
  <main class="app-shell">
    <header class="page-header">
      <RouterLink class="back-link" to="/user">‹</RouterLink>
      <div>
        <p class="eyebrow">Settings</p>
        <h1>Preferences</h1>
      </div>
    </header>

    <section class="settings-list">
      <label>
        <span>Language</span>
        <select>
          <option>English</option>
          <option>Spanish</option>
          <option>Arabic</option>
        </select>
      </label>
      <label>
        <span>Push notifications</span>
        <input type="checkbox" checked />
      </label>
      <label>
        <span>Private profile</span>
        <input type="checkbox" />
      </label>
      <RouterLink to="/settings/about">
        <span>About this template</span>
        <strong>Frontend UI only</strong>
      </RouterLink>
    </section>
  </main>
</template>
