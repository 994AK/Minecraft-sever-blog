<template>
  <PersonalControlLayouts>
    <div class=" flex-1 py-4 bg-white rounded">
      <PersonalProfileRight v-if="$route.params.name === 'profile'"/>
    </div>
  </PersonalControlLayouts>
</template>

<script setup>
// 路由中间件
definePageMeta({
  // This is an example of inline middleware
  middleware: () => {
    const authToken = useCookie('authToken')
    // 判断是否登陆
    if (authToken.value) { return true }
    // 跳转登陆
    return navigateTo('/login')
  }
})

</script>
