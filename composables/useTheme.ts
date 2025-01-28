import { ref, onMounted, watch } from 'vue'

export const useTheme = () => {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    updateTheme()
  })

  return {
    isDark,
    toggleTheme
  }
} 