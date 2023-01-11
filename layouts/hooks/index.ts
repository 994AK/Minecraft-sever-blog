export const useSelectEffect = (path:number) => {
  const selectedIndex = ref(path)

  const handleSelectedHandOff = (index: any) => {
    selectedIndex.value = index
  }

  return {
    selectedIndex,
    handleSelectedHandOff
  }
}
