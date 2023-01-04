// import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'pathe'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      apiUrl: process.env.API_URL
    }
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ]
    }
  },
  build: {
    transpile: process.env.NODE_ENV === 'development' ? ['@babel/plugin-transform-runtime'] : ['@babel/plugin-transform-runtime', '@babel/runtime']
  },
  vite: {
    optimizeDeps: {
      include: ['@babel/plugin-transform-runtime']
    },
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ],
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue', '@ant-design/icons-vue']
    }
  },
  routeRules: {
    '/**': { headers: { 'Access-Control-Allow-Origin': '*' } }
  },
  alias: {
    '@': resolve(__dirname, './src')
  },
  css: ['~/assets/styles/variable.scss', 'ant-design-vue/dist/antd.css']
})
