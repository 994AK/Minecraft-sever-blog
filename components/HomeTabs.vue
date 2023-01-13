<template>
  <div
    class="transition-all  duration-500 ease-in-out item-saver"
  >
    <!--  显示数量效果   -->
    <div v-if="!props.showVisit" class="p-5">
      <div class="md:text-sm font-medium text-gray-500">
        {{ props.title }}
      </div>
      <div class="flex items-end ">
        <div v-if="num !== 0 " class="mt-2">
          <span class="md:text-2xl mt-2 font-bold text-indigo-600">{{ num }}</span>
          <span class="text-md mb-0.5 ml-2 text-sm font-medium text-gray-500">人数</span>
        </div>
        <div v-else class="mt-2.5">
          <span class="text-md text-lg font-medium text-gray-700">🤩 期待玩家上线中...</span>
        </div>
      </div>
      <div class="mt-3">
        <span class="text-md  text-sm font-medium text-blue-500"> {{ props.prompt }} </span>
      </div>
    </div>
    <!--  访问效果   -->
    <div v-if="props.showVisit" class="p-5 cursor-pointer" @click="$emit('emitsClick')">
      <div class="md:text-sm font-medium text-gray-500">
        {{ props.title }}
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
        <span class="text-md  text-sm font-medium text-blue-500"> {{ props.prompt }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String, // 标题
  num: Number, // 显示数量
  showVisit: Boolean, // 开启访问入口
  prompt: String // 提示语
})

// 暴露方法出去给父级
defineEmits(['emitsClick'])
</script>

<style scoped lang="scss">
.item-saver {
  @apply
  mb-5
  md:mb-0
  border-2 border-gray-100 rounded-xl
  bg-white
  md:hover:shadow-md
}
</style>
