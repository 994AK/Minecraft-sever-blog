export const useSelectEffect = () => {
  const selectedIndex = ref(0)

  const handleSelectedHandOff = (index: number) => {
    selectedIndex.value = index
  }

  return {
    selectedIndex,
    handleSelectedHandOff
  }
}
