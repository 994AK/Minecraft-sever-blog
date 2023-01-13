<template>
  <div>
    <div>
      <div v-if="!res?.data?.gamesName">
        <span class="text-red-800 px-2">*</span>绑定用户ID: <input v-model="value" class="border">
      </div>
      <div v-else>
        欢迎光临 {{ res?.data?.gamesName }}
      </div>
    </div>
    <div v-if="valueVerify" class="pl-5 text-red-900 font-bold">
      请输入绑定id
    </div>
    <div>
      <div v-if="!res?.data?.info">
        <span class="text-red-800 px-2">*</span>简介: <input v-model="info" maxlength="50" placeholder="用50个字介绍自己" class="border w-96 h-8">
      </div>
      <div v-else>
        {{ res?.data?.info }}
      </div>
    </div>

    <div v-if="infoVerify" class="pl-5 text-red-900 font-bold">
      请输入简介
    </div>
    <button v-if="!res?.data?.info || !res?.data?.info" class="border p-2  w-40 ml-10" @click="handleFormClick">
      提交
    </button>
  </div>
</template>

<script setup>
const res = ref(await getData('api/user/findUserById'))
console.log(res.value.data)

const value = ref('')
const info = ref('')
const valueVerify = ref(false)
const infoVerify = ref(false)

const handleFormClick = async () => {
  valueVerify.value = !value.value
  infoVerify.value = !info.value

  const res = await postData('api/user/updateFineUser', {
    gamesName: value.value,
    info: info.value
  })

  const { data, msg } = res.value

  if (!data) {
    alert(msg)
  } else {
    alert(msg)
    navigateTo('/users')
  }
}

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
