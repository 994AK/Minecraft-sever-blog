<template>
  <div>
    <div v-if="data">
      欢迎你,<span style="font-size: 30px">{{ data.name }} </span>
    </div>
    <div v-else>
      查询不到您,您登陆了吗？
      <NuxtLink to="/login">
        点击这里登陆。
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

const route = useRoute()
const { code, data, msg } = await getData('api/user/findUserById?id=' + route.params.id)
console.log(code, data, msg)
</script>
