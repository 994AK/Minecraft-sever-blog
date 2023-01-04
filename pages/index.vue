<template>
  <div>
    <a-button type="primary" @click="info">
      Display normal message
    </a-button>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'
const info = () => {
  message.info('This is a normal message')
}
</script>
