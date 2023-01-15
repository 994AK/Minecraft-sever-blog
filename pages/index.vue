<template>
  <div>
    <HeadTabs :selected-index="0" />
    <div class=" bg-gray-50 drop-shadow-md">
      <div class="md:px-10 px-4">
        <div class="text-xl py-2  md:text-4xl font-bold text-indigo-600 md:pt-8 md:pb-5 text-indigo-600">
          服务器状态
        </div>
        <div class="flex flex-col md:gap-3 pb-10 md:flex-row md:rounded-3xl  md:items-center ">
          <HomeTabs
            v-for="(item,index) in homeTabs"
            :key="index"
            :title="item.title"
            :num="item.num"
            :show-visit="item.showVisit"
            :prompt="item.prompt"
            @emits-click="handleJumpPathClick(item.title)"
          />
        </div>
      </div>
    </div>

    <div class="md:px-10 md:py-12  md:bg-gray-100 ">
      <div v-if="!authToken" class="md:mx-auto md:max-w-7xl md:items-center md:flex md:justify-between">
        <div class="md:flex md:flex-col md:gap-2 md:text-2xl tracking-tight text-gray-900 md:font-bold">
          <span class="block">准备好了吗?</span>
          <span class="block text-indigo-600">加入服务器,游玩HuaYu世界</span>
        </div>
        <div class="md:flex gap-3">
          <div
            class="cursor-pointer inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
            @click="navigateTo('/login')"
          >
            登录
          </div>
        </div>
      </div>

      <div v-else class="md:mx-auto md:max-w-7xl md:items-center md:flex md:justify-between">
        <div
          class=" m-4 md:m-0 flex gap-4 items-center border bg-white rounded-xl px-4 py-3 transition-all  duration-500 ease-in-out hover:shadow-xl cursor-pointer"
          @click="navigateTo('/users/personal-center')"
        >
          <img class="w-20 h-20 md:object-cover border-2 border-gray-700 rounded-full" src="/sdf.png">
          <div class="flex flex-col gap-1">
            <span class="font-bold text-xl text-indigo-600">{{ userInfo.gamesName }}</span>
            <span class="text-sm flex w-[14rem] max-h-10 overflow-hidden">{{ userInfo.info }}</span>
          </div>
        </div>
        <div class="hidden md:flex gap-3">
          <div
            class="cursor-pointer inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
            @click="navigateTo('/users/personal-center')"
          >
            个人中心
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const state = await getData('api/minecraft/state')
const authToken = useCookie('authToken')

const userInfo = reactive({
  gamesName: '',
  info: ''
})

if (authToken) {
  const user = await getData('api/user/findUserById')
  const { gamesName, info } = user.data
  userInfo.gamesName = gamesName
  userInfo.info = info
}

const homeTabs = reactive([
  { title: '在线列表', num: state?.data ? state?.data?.players.online : 0 },
  { title: '玩家列表', showVisit: true },
  { title: '快捷权限', showVisit: true, prompt: '忘记指令了? 试试快捷指令吧' }
])

const handleJumpPathClick = (title) => {
  if (title === '玩家列表') {
    router.push('/users')
  }
}

useHead({
  title: 'HuaYu服务器',
  meta: [
    { content: 'description', name: '我的世界HuaYu服务器1.19.2' },
    { content: 'keywords', name: '我的世界服务器, HuaYu,我的世界1.19.2' }
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
  bg-white md:w-full
  md:hover:shadow-md
}
</style>
