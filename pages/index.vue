<template>
  <div>
    <div class=" bg-gray-50 drop-shadow-md">
      <div class="md:px-10 px-4">
        <div class="text-xl py-2  md:text-4xl font-bold text-indigo-600 md:pt-8 md:pb-5 text-purple-700">
          服务器状态
        </div>
        <div class="flex flex-col pb-10 md:flex-row md:rounded-3xl  md:items-center ">
          <div
            class="
            transition-all  duration-500 ease-in-out
            item-saver
            "
          >
            <div class="p-5">
              <div class="md:text-sm font-medium text-gray-500">
                在线玩家
              </div>
              <div class="flex items-end ">
                <div v-if="state?.data && state.data?.players.online !== 0 " class="mt-2">
                  <span class="md:text-2xl mt-2 font-bold text-indigo-600">{{ state.data?.players.online }}</span>
                  <span class="text-md mb-0.5 ml-2 text-sm font-medium text-gray-500">人数</span>
                </div>
                <div v-else class="mt-2.5">
                  <span class="text-md text-lg font-medium text-gray-700">🤩 期待玩家上线中...</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
            transition-all  duration-500 ease-in-out
            item-saver
            "
          >
            <div class="p-5 cursor-pointer  ">
              <div class="md:text-sm font-medium text-gray-500">
                玩家列表
              </div>
              <div class="flex items-end ">
                <div class="flex items-end">
                  <span class="md:text-2xl mt-2 font-bold text-indigo-600"> 访问 </span>
                  <span class="text-md ml-2 text-sm font-medium text-gray-500">
                    <img src="/right.png" alt="右箭头" width="20" height="20">
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
            transition-all  duration-500 ease-in-out
            item-saver
            "
          >
            <div class="p-5 cursor-pointer  ">
              <div class="md:text-sm font-medium text-gray-500">
                快捷指令
              </div>
              <div class="flex items-end ">
                <div class="flex items-end">
                  <span class="md:text-2xl mt-2 font-bold text-indigo-600"> 访问 </span>
                  <span class="text-md ml-2 text-sm font-medium text-gray-500">
                    <img src="/right.png" alt="右箭头" width="20" height="20">
                  </span>
                </div>
              </div>
              <div class="mt-3">
                <span class="text-md  text-sm font-medium text-blue-500"> 忘记指令了？试试快捷指令 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { message } from 'ant-design-vue'
// import debounce from '~/utils/debounce'

// const findUserById = await getData('api/user/findUserById')
const state = await getData('api/minecraft/state')

// const user = useState('user', () => findUserById)

// function signBtn () {
//   debounce(async () => {
//     // 登陆token
//     if (useCookie('authToken').value) {
//       const { value: sign } = await postData('api/minecraft/sign', {
//         notes: '我不知道今天发生了什么',
//         signEquipment: 'iphone'
//       })
//       message.success(sign.msg)
//       // 更新状态
//       user.value = await getData('api/user/findUserById')
//     } else {
//       await navigateTo('/login')
//     }
//   })
// }

useHead({
  title: 'HuaYu服务器',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'Home', content: '我的世界HuaYu服务器1.19.2' },
    { hid: 'keywords', name: 'keywords', content: '我的世界服务器, HuaYu,我的世界1.19.2' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
  ]
})
</script>

<style scoped lang="scss">
.item-saver {
  @apply
  mb-5
  md:mb-0
  md:h-36 border-2 border-gray-100 rounded-xl
  bg-white md:w-1/3
  md:mr-5
  md:hover:shadow-md
}
</style>
