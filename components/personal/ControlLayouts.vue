<template>
  <div class="min-h-screen bg-gray-200">
    <HeadTabs :selected-index="2" />
    <div class="mt-4 flex gap-4  max-w-7xl mx-auto">
<!--      <PersonalControlLeft />-->
      <slot/>
    </div>
  </div>
</template>
