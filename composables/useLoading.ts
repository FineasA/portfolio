import { ref } from 'vue'

const isLoading = ref(true)

export const useLoading = () => {
  const show = () => {
    isLoading.value = true
  }

  const hide = () => {
    isLoading.value = false
  }

  return {
    isLoading,
    show,
    hide
  }
} 