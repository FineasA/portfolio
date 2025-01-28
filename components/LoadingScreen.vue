<template>
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-background dark:bg-background-dark">
      <div class="relative w-32 h-32">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="i in 9" :key="i" 
            class="w-6 h-6 rounded-full bg-primary/20 dark:bg-primary/30 animate-breathe"
            :class="'delay-' + i"
          ></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  isLoading: boolean
}>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-breathe {
  animation: breathe 1s infinite alternate ease-in-out;
}

@keyframes breathe {
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
.delay-5 { animation-delay: 0.5s; }
.delay-6 { animation-delay: 0.6s; }
.delay-7 { animation-delay: 0.7s; }
.delay-8 { animation-delay: 0.8s; }
.delay-9 { animation-delay: 0.9s; }
</style>
