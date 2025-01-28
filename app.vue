<template>
  <div class="min-h-screen bg-background dark:bg-background-dark text-gray-100 overflow-x-hidden">
    <LoadingScreen :is-loading="isLoading" />
    <ThemeToggle />
    <MouseAura />
    <NuxtPage />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  cursor: none;
  overflow-x: hidden;
}

body {
  @apply bg-background dark:bg-background-dark;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Custom cursor */
.custom-cursor {
  @apply w-4 h-4 border-2 border-primary rounded-full fixed pointer-events-none z-50;
  mix-blend-mode: difference;
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
      document.body.style.overflow = 'hidden'
    } else {
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
