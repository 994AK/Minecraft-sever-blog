<template>
  <div>
    {{ counter }}
    {{ data }}
  </div>
</template>

<script setup>
const route = useRoute()
const counter = useState('counter', () => route.params.id)
const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>
