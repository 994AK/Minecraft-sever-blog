<template>
  <div>
    <HeadTabs :selected-index="1" />
    <div class="max-w-7xl mt-5 md:mt-8 mx-auto w-11/12">
      <div class="text-xl mb-3 md:text-4xl font-bold md:mb-6">
        玩家列表
      </div>
      <div class="flex justify-between items-center">
        <div class="text-md md:text-xl text-slate-700 font-bold">
          目前服务器在线
        </div>
        <div
          class="py-1 px-2 md:py-3 md:px-5 flex items-center text-base font-medium text-indigo-600 border-indigo-600 hover:bg-indigo-50 border rounded-md cursor-pointer"
          @click="handleClickFlushed"
        >
          <span class="pr-1.5 md:pr-3"><img width="20" height="20" src="/shuax.png" alt="刷新"></span>
          <span>刷新</span>
        </div>
      </div>

      <div v-if="state?.data" class="mt-3 md:mt-6">
        <ul class="flex flex-col md:flex-row gap-3 md:flex  md:flex-wrap ">
          <li
            v-for="(item,index) in state.data.players.list"
            :key="index"
            class="
            transition-all ease-out duration-500 cursor-pointer
            md:border-2 hover:border-orange-600 p-2 md:p-6 md:w-[224px] md:max-h-[272px] max-h-24
            flex md:flex-col md:items-center
            md:rounded-xl justify-center md:justify-start
            md:bg-white bg-neutral-50 rounded-lg active:bg-stone-200 shadow-md md:shadow-none
            gap-3 w-full"
          >
            <div class="flex-none md:w-[80px] h-[80px]">
              <img class="md:w-[80px] h-[80px] object-cover rounded-full" :src="'https://mc-heads.net/avatar/'+item" alt="像素头像">
            </div>

            <!-- 电脑页 -->
            <div class="hidden md:flex md:flex-wrap">
              <span class="text-xl text-orange-600 font-bold">{{ item }}</span>
            </div>
            <div class="hidden md:block md:overflow-hidden h-full">
              <span class="font-normal">这个人很懒,没有设置简介</span>
            </div>
            <!-- 手机页  -->
            <div class="md:hidden flex gap-1 flex-col w-full">
              <!-- 名字 -->
              <span class="text-xl text-orange-600 font-bold">{{ item }}</span>
              <div class="overflow-hidden h-full">
                <span class="font-normal h-full"> 这个人很懒,没有设置简介</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import debounce from '~/utils/debounce.js'
const state = ref(await getData('api/minecraft/state'))
function handleClickFlushed () {
  debounce(async () => {
    state.value = await getData('api/minecraft/state')
  }, 500)
}
</script>
