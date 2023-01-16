<template>
  <div>
    <div class="px-5 text-xl pb-2 border-b ">
      个人资料
    </div>
    <div class="px-10 mt-4">
      <div class="border-t border-b p-4 flex items-center">
        <div class="mr-10 w-[50px]">
          游戏ID
        </div>
        <div class="w-1/4">
          <input
            v-model="profileForm.gamesName"
            maxlength="30"
            class="border rounded-md py-1 px-3  w-full placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="输入游戏ID"
          >
        </div>
        <div v-if="profileRules.gamesName" class="text-sm pl-3 text-red-600">
          请输入游戏ID
        </div>
      </div>
      <div class="border-b p-4 flex items-center">
        <div class="mr-10 w-[50px]">
          简介
        </div>
        <div class="w-1/4">
          <input
            v-model="profileForm.info"
            maxlength="80"
            class="border rounded-md py-1 px-3  w-full placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="输入个人简介只能输80字"
          >
        </div>
        <div v-if="profileRules.info" class="text-sm pl-3 text-red-600">
          请输入简介
        </div>
      </div>
    </div>
    <div class="px-10 mt-4">
      <button
        class="py-2 px-4 "
        :class="[profileForm.gamesName && profileForm.info && !disable ? 'success' : 'disable']"
        @click="handleSuccess"
      >
        保存修改
      </button>
    </div>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'

const user = await getData('api/user/findUserById')
const useProfileEffects = () => {
  const profileForm = reactive({
    gamesName: '',
    info: ''
  })

  const profileRules = reactive({
    gamesName: false,
    info: false
  })

  // 禁用判断
  const disable = ref(false)

  // 数据回显处理
  const handleEcho = (val) => {
    profileForm.gamesName = val.gamesName
    profileForm.info = val.info
  }

  // 处理请求值
  const handleSuccess = async () => {
    // 监听数据变化
    const watchFn = watch(
      () => profileForm,
      (val) => {
        const {
          gamesName,
          info
        } = val
        profileRules.gamesName = !gamesName
        profileRules.info = !info
      },
      { deep: true }
    )

    profileRules.gamesName = !profileForm.gamesName
    profileRules.info = !profileForm.info

    disable.value = true
    const res = await postData('api/user/updateFineUser', profileForm)
    if (res.value?.code === 200) {
      // 关闭监听
      watchFn()
      message.success('保存成功')
      disable.value = false
    } else {
      message.warning(res.value?.data.msg);
      disable.value = false
    }
  }

  return {
    profileForm,
    profileRules,
    disable,
    handleEcho,
    handleSuccess
  }
}

const { profileForm, profileRules, disable, handleEcho, handleSuccess } = useProfileEffects()

if (user?.data) {
  // 用户绑定后,回显请求返回值
  handleEcho(user.data)
}

</script>

<style lang="scss" scoped>
// 禁用
.disable {
 @apply bg-gray-300 text-white rounded-md cursor-no-drop
}

.success {
  @apply bg-blue-600 text-white rounded-md hover:bg-blue-700
}
</style>
