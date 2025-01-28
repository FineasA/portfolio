<template>
  <div class="min-h-screen bg-rs-brown dark:bg-rs-interface-dark text-rs-scroll overflow-x-hidden font-runescape" :class="{ 'hide-scrollbar': isLoading }">
    <LoadingScreen :is-loading="isLoading" />
    <ThemeToggle />
    <MouseAura />
    <NuxtPage />
  </div>
</template>

<style>
@font-face {
  font-family: 'RuneScape';
  src: url('/fonts/RuneScape-UF.woff2') format('woff2'),
       url('/fonts/RuneScape-UF.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

html {
  scroll-behavior: smooth;
  cursor: none;
  overflow-x: hidden;
  @apply bg-rs-brown dark:bg-rs-interface-dark;
}

body {
  @apply bg-rs-brown dark:bg-rs-interface-dark;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  image-rendering: pixelated;
}

/* RuneScape-style buttons */
.rs-button {
  @apply bg-rs-interface border-2 border-rs-interface-light shadow-rs 
         hover:bg-rs-interface-dark hover:border-rs-gold 
         text-rs-scroll px-4 py-2 cursor-pointer 
         transition-colors duration-200;
}

/* RuneScape-style text effects */
.rs-chat {
  @apply text-rs-chat;
}

.rs-examine {
  @apply text-rs-examine italic;
}

/* RuneScape-style panels */
.rs-panel {
  @apply bg-rs-interface border-3 border-rs-interface-light 
         shadow-rs p-4 rounded-sm;
}

/* Hide scrollbar styles */
.hide-scrollbar {
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
  overflow: hidden !important;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

:root:has(.hide-scrollbar) {
  overflow: hidden !important;
}

:root:has(.hide-scrollbar) body {
  overflow: hidden !important;
}
</style>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useLoading } from '~/composables/useLoading'

const { isLoading, hide } = useLoading()

// Prevent scroll during loading
if (process.client) {
  watch(isLoading, (value) => {
    if (value) {
      document.documentElement.setAttribute('data-loading', 'true')
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.setAttribute('data-loading', 'false')
      document.body.style.overflow = ''
    }
  })
}

onMounted(() => {
  // Ensure initial scroll position
  window.scrollTo(0, 0)
  
  // Hide loading screen after a short delay
  setTimeout(() => {
    hide()
  }, 1500)

  // Create custom cursor
  const cursor = document.createElement('div')
  cursor.classList.add('custom-cursor')
  document.body.appendChild(cursor)

  const updateCursor = (e: MouseEvent) => {
    if (!cursor) return
    cursor.style.left = e.clientX - 8 + 'px'
    cursor.style.top = e.clientY - 8 + 'px'
  }

  document.addEventListener('mousemove', updateCursor)
})
</script>
