import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('useUserStore', () => {
  const emailStore = ref('')
  const nameStore = ref('')
  const tokenStore = ref('')

  return { emailStore, nameStore, tokenStore }
})
