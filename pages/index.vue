<template>
  <div>
    <p>服务器名字:HuaYu</p>
    <p>服务器版本 {{ data.version }}</p>
    <p>在线玩家: {{ data.players.list.join(',') }}</p>
  </div>
</template>

<script setup>
const { data } = await getData('api/minecraft/state')
useHead({
  title: 'HuaYu服务器',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'HuaYu服务器', content: '我的世界服务器1.19.2' },
    { hid: 'keywords', name: 'keywords', content: '我的世界服务器, HuaYu,我的世界1.19.2' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
  ]
})
</script>
