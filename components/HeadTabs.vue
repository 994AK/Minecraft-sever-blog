<template>
  <div>
    <div class="md:h-14 md:bg-gray-700">
      <!--  电脑tab   -->
      <div class="hidden max-w-7xl mx-auto   md:flex md:items-center md:h-full ">
        <img alt="logo" src="/favicon.ico" width="40" height="40">
        <div class="md:flex  md:ml-10">
          <div
            v-for="(item,index) in layoutTabs"
            :key="item"
          >
            <NuxtLink
              class="text-tabs"
              :class="[props.selectedIndex === index ? 'tabs-Selected' : 'tabs-noSelected']"
              :to="item.path"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- 手机tab  -->
      <div class="md:hidden bg-gray-700" :class="[control ? 'h-48' : 'h-15']">
        <div class="flex py-3 items-center justify-between">
          <div class="flex pl-5 justify-center items-center ">
            <img class="w-[40px] h-[40px]" alt="logo" src="/favicon.ico">
          </div>
          <div
            class="
              w-[40px] h-[40px] mr-2.5
              transition-all ease-out duration-500
              flex justify-center items-center text-white bg-slate-200 bg-opacity-20 rounded-md active:bg-slate-600
            "
            @click="controlShow"
          >
            <img src="/kz.png" alt="控制器" width="25" height="25">
          </div>
        </div>
        <div v-show="control" class="mx-2.5 my-5">
          <div
            v-for="(item,index) in layoutTabs"
            :key="item"
            :class="[props.selectedIndex === index && 'tabs-Selected-yes']"
            class="px-2.5 py-1.5 mb-1 "
          >
            <NuxtLink
              class="transition-all ease-out duration-700 text-gray-400 w-full flex"
              :class="[props.selectedIndex === index && 'tabs-Selected-text-yes']"
              :to="item.path"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedIndex: Number
})

// 默认手机端关闭
const control = ref(false)

const controlShow = () => {
  control.value = !control.value
}

const layoutTabs = [{
  name: '首页',
  path: '/'
}, {
  name: '玩家列表',
  path: '/users'
}
]

</script>

<style scoped>
.text-tabs {
  @apply md:px-2.5 md:py-2.5 md:mr-5 md:rounded-md cursor-pointer
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

.tabs-Selected-yes {
  @apply transition-all ease-out delay-150 duration-700  text-white bg-slate-200 bg-opacity-20 rounded-md
}

.tabs-Selected-text-yes {
  @apply transition-all ease-out duration-700 text-white
}
</style>
