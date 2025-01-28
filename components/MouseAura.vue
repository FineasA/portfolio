<template>
  <div
    ref="auraEl"
    class="pointer-events-none fixed inset-0 z-30"
  >
    <!-- Outer aura -->
    <div
      class="absolute rounded-full will-change-transform"
      :style="{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        width: '300px',
        height: '300px',
        left: '-150px',
        top: '-150px',
        background: 'radial-gradient(circle, rgba(95, 113, 97, 0.08) 0%, rgba(109, 139, 116, 0.05) 40%, transparent 70%)',
        filter: 'blur(30px)',
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }"
    />
    <!-- Inner aura -->
    <div
      class="absolute rounded-full will-change-transform"
      :style="{
        transform: `translate3d(${innerPosition.x}px, ${innerPosition.y}px, 0)`,
        width: '150px',
        height: '150px',
        left: '-75px',
        top: '-75px',
        background: 'radial-gradient(circle, rgba(215, 192, 174, 0.1) 0%, rgba(95, 113, 97, 0.08) 50%, transparent 70%)',
        filter: 'blur(15px)',
        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRafFn } from '@vueuse/core'

const position = ref({ x: 0, y: 0 })
const innerPosition = ref({ x: 0, y: 0 })
const targetPosition = ref({ x: 0, y: 0 })

const updatePosition = (e: MouseEvent) => {
  targetPosition.value = {
    x: e.clientX,
    y: e.clientY
  }
}

// Smooth follow animation with lower speed for more subtle movement
useRafFn(() => {
  // Outer aura follows with more lag
  position.value = {
    x: position.value.x + (targetPosition.value.x - position.value.x) * 0.08,
    y: position.value.y + (targetPosition.value.y - position.value.y) * 0.08
  }
  
  // Inner aura follows more closely
  innerPosition.value = {
    x: innerPosition.value.x + (targetPosition.value.x - innerPosition.value.x) * 0.15,
    y: innerPosition.value.y + (targetPosition.value.y - innerPosition.value.y) * 0.15
  }
})

onMounted(() => {
  window.addEventListener('mousemove', updatePosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition)
})
</script> 