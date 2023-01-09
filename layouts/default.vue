<template>
  <div>
    <div class="md:flex md:justify-center md:h-14 md:bg-gray-700">
      <div class="md:flex md:items-center md:w-10/12 md:h-full md:px-5">
        <img alt="logo" src="../public/favicon.ico" width="40" height="40">
        <div class="md:flex  md:ml-10">
          <div
            v-for="(item,index) in layoutTabs"
            :key="item"

            @click="handleSelectedHandOff(index)"
          >
            <NuxtLink
              class="text-tabs"
              :class="[selectedIndex === index ? 'tabs-Selected' : 'tabs-noSelected']"
              :to="item.path"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { useSelectEffect } from './hooks/index'
// 处理选择效果
const { handleSelectedHandOff, selectedIndex } = useSelectEffect()

const layoutTabs = [{
  name: '首页',
  path: '/'
}, {
  name: '服务器状态',
  path: '/server-status'
}]

onMounted(() => {
  const route = useRoute()
  const PATH = {
    '/': 0,
    '/server-status': 1
  }
  // 默认值处理tabs
  handleSelectedHandOff(PATH[route.path])
})

</script>

<style scoped lang="scss">
.text-tabs {
  @apply md:px-2 md:py-2 md:mr-5 md:rounded-md cursor-pointer
}

.tabs-Selected {
  @apply md:bg-black md:text-white md:bg-opacity-50

}
.tabs-noSelected {
  @apply md:text-gray-300 hover:bg-slate-400 hover:bg-opacity-10 hover:text-white
}

.nuxt-link-text {
  @apply md:text-white
}

.nuxt-link-text-on {
  @apply md:text-gray-300
}
</style>
