<template>
  <button
    @click="toggleTheme"
    class="fixed top-4 right-4 z-40 p-2 rounded-full bg-background-light dark:bg-background-dark shadow-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
    aria-label="Toggle theme"
  >
    <div class="relative w-6 h-6">
      <!-- Sun icon -->
      <div
        class="absolute inset-0 transform transition-transform duration-500"
        :class="isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
          />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      </div>
      <!-- Moon icon -->
      <div
        class="absolute inset-0 transform transition-transform duration-500"
        :class="isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script> 