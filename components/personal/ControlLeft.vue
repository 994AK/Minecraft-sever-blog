<template>
  <div class="bg-white rounded px-2 py-4 w-1/6 flex flex-col ">
    <div class="px-4 pb-10 flex flex-col items-center gap-4">
      <!-- 头像 -->
      <img src="/favicon.ico" class="w-[80px] h-[80px] object-cover rounded-full" />
      <span class="font-serif tracking-tight text-lg">66a</span>
    </div>
    <div class="flex gap-4 w-full flex-col">
      <div class="px-4 py-2 personal-selected">个人资料</div>
<!--      <div class="px-4 py-2 personal-on-select personal-hover">个人设置</div>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
// 选中样式
.personal-selected {
  @apply cursor-pointer bg-sky-200 text-blue-600 bg-opacity-40 rounded-md
}

// 未选中样式
.personal-on-select {
  @apply cursor-pointer text-slate-600  rounded-md
}

// 鼠标经过
.personal-hover {
  @apply hover:text-blue-600 hover:bg-gray-50 hover:bg-opacity-80
}
</style>
