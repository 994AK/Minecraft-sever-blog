<template>
  <div>
    <HeadTabs :selected-index="1" />
    <div class="max-w-7xl md:mt-8 mx-auto md:w-11/12">
      <div class="md:text-4xl font-bold md:mb-6">
        玩家列表
      </div>
      <div class="md:flex md:justify-between md:items-center">
        <div class="md:text-xl text-slate-700 font-bold">
          目前服务器在线
        </div>
        <div class="md:py-3 md:px-5 md:flex md:items-center  text-base font-medium text-indigo-600 border-indigo-600 hover:bg-indigo-50 border rounded-md cursor-pointer">
          <span class="pr-3"><img width="20" height="20" src="/shuax.png" alt="刷新"></span>
          <span>刷新</span>
        </div>
      </div>

      <div class="md:mt-6">
        <ul class="md:flex gap-3 md:flex-wrap ">
          <li
            v-for="(item,index) in state.data.players.list"
            :key="index"
            class="
            transition-all ease-out duration-500 cursor-pointer
            md:border-2 md:hover:border-orange-600  md:p-6 md:w-[224px] md:max-h-[272px]
            md:flex md:flex-col md:items-center
            md:rounded-xl
            gap-3"
          >
            <div class="md:w-[80px] h-[80px]">
              <img class="md:w-[80px] h-[80px] object-cover rounded-full" :src="'https://mc-heads.net/avatar/'+item">
            </div>
            <div class="md:flex md:flex-wrap">
              <span class="text-xl text-orange-600 font-bold">{{ item }}</span>
            </div>

            <div class="md:overflow-hidden h-full">
              <span class="font-normal">这个人很懒,没有设置简介</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const state = await getData('api/minecraft/state')
</script>
