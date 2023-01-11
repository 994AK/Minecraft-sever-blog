<template>
  <div>
    <div class=" bg-gray-50 drop-shadow-md">
      <div class="md:px-10 px-4">
        <div class="text-xl py-2  md:text-4xl font-bold text-indigo-600 md:pt-8 md:pb-5 text-purple-700">
          服务器状态
        </div>
        <div class="flex flex-col pb-10 md:flex-row md:rounded-3xl  md:items-center ">
          <HomeTabs
            v-for="(item,index) in homeTabs"
            :key="index"
            :title="item.title"
            :num="item.num"
            :show-visit="item.showVisit"
            :prompt="item.prompt"
            @click="handleJumpPathClick(item.title)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const state = await getData('api/minecraft/state')

const homeTabs = reactive([
  { title: '在线列表', num: state.data ? state.data.players.online : 0 },
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
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
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
  bg-white md:w-1/3
  md:mr-5
  md:hover:shadow-md
}
</style>
