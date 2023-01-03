// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'pathe'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  routeRules: {
    '/**': { headers: { 'Access-Control-Allow-Origin': '*' } }
  },
  alias: {
    '@': resolve(__dirname, './src')
  },
  css: ['ant-design-vue/dist/antd.css'],
  buildDir: 'nuxt-build',
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  vite: {
    plugins: [
      eslintPlugin({
        emitWarning: true,
        emitError: true
      }),
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ],
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue', '@ant-design/icons-vue']
    },
    server: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      cors: {
        origin: 'http://localhost:3000'
      },
      proxy: {
        '/api': {
          target: 'https://www.xxx.net', // 这里是接口地址
          changeOrigin: true
        },
        '^/api': {
          target: 'https://xxx.com', // 这里是接口地址
          changeOrigin: true
        }
      }
    }
  }
})
