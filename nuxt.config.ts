// import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'pathe'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  ssr: true,
  build: {
    transpile: ['@babel/plugin-transform-runtime']
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
