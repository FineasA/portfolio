<template>
  <div class="min-h-screen bg-background dark:bg-background-dark flex items-center justify-center px-4">
    <MouseAura />
    <div class="max-w-xl w-full text-center space-y-8">
      <!-- Error Illustration -->
      <div class="relative w-48 h-48 mx-auto">
        <!-- Animated cube for 404 -->
        <div class="absolute inset-0 animate-float">
          <div class="relative w-full h-full transform-preserve-3d animate-spin-slow">
            <div class="absolute inset-0 border-2 border-primary/30 dark:border-primary-light/30 transform rotate-45"></div>
            <div class="absolute inset-0 border-2 border-primary/20 dark:border-primary-light/20 transform -rotate-45"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-6xl font-bold text-primary dark:text-primary-light">404</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div class="space-y-4">
        <h1 class="text-4xl font-bold text-primary dark:text-primary-light">
          {{ error?.statusCode === 404 ? 'Page Not Found' : 'An Error Occurred' }}
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          {{ error?.message || "Sorry, we couldn't find the page you're looking for." }}
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="handleError"
          class="px-6 py-3 bg-primary text-white hover:bg-primary-light rounded-lg transition-all duration-300 hover:scale-105 cursor-none"
        >
          Try Again
        </button>
        <NuxtLink
          to="/"
          class="px-6 py-3 border border-wood text-wood hover:bg-wood hover:text-white rounded-lg transition-all duration-300 hover:scale-105 cursor-none"
        >
          Back Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError()
  navigateTo(useRequestURL())
}

// Custom cursor setup
onMounted(() => {
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

  // Hide default cursor
  document.documentElement.style.cursor = 'none'

  onUnmounted(() => {
    document.removeEventListener('mousemove', updateCursor)
    cursor.remove()
    document.documentElement.style.cursor = ''
  })
})
</script>

<style scoped>
.transform-preserve-3d {
  transform-style: preserve-3d;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

/* Custom cursor */
.custom-cursor {
  @apply w-4 h-4 border-2 border-primary rounded-full fixed pointer-events-none z-50;
  mix-blend-mode: difference;
}
</style> 