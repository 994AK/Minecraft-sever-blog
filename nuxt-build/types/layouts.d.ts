import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/yangguanghua/Desktop/前端/👍个人项目/nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}