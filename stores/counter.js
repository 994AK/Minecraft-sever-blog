import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const increment = () => {
    console.log(1111)
    count.value++
    console.log(count.value)
  }

  return { count, increment }
})
