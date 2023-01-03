// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'pathe'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  ssr: true,
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  nitro: {
    commonJS: {
      dynamicRequireTargets: [
        './node_modules/@vue/compiler-core',
        './node_modules/@vue/compiler-dom',
        './node_modules/@vue/compiler-ssr',
        './node_modules/vue/server-renderer',
        './node_modules/vue'
      ]
    }
  },
  routeRules: {
    '/**': { headers: { 'Access-Control-Allow-Origin': '*' } }
  },
  alias: {
    '@': resolve(__dirname, './src'),
    '@vue/compiler-core': '@vue/compiler-core',
    '@vue/compiler-dom': '@vue/compiler-dom',
    '@vue/compiler-ssr': '@vue/compiler-ssr',
    'vue/server-renderer': 'vue/server-renderer',
    'estree-walker': 'estree-walker',
    '@babel/parser': '@babel/parser'
  },
  css: ['~/assets/styles/variable.scss'],
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
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    },
    plugins: [
      eslintPlugin({
        emitWarning: true,
        emitError: true
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    ssr: {
      noExternal: ['moment', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr']
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
