import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/yangguanghua/Desktop/前端/👍个人项目/nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}