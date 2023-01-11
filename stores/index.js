import { defineStore } from 'pinia'

export const useLayouts = defineStore('layouts', (path = 0) => {
  const selectedIndex = ref(path)

  function handleSelectedHandOff (index = 0) {
    selectedIndex.value = index
    console.log(selectedIndex.value)
  }

  return {
    selectedIndex,
    handleSelectedHandOff
  }
})
