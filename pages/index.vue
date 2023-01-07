<template>
  <div>
    <div v-if="state">
      <p>服务器名字:HuaYu</p>
      <p>服务器版本 {{ state.data.version }}</p>
      <p>在线玩家: {{ state.data.players.list.join(',') }}</p>
      <p v-if="user" style="font-size: 20px">
        你的名字: {{ user?.data?.name }}
      </p>
    </div>

    <div>
      <p v-if="user?.data?.dailyCheckInsEntity[0]?.signShow" style="color:red">
        你已签到了哦
      </p>
      <a-button v-else @click="signBtn">
        点我签到
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'
import debounce from '~/utils/debounce'

const findUserById = await getData('api/user/findUserById')
const state = await getData('api/minecraft/state')

const user = useState('user', () => findUserById)

function signBtn () {
  debounce(async () => {
    // 登陆token
    if (useCookie('authToken').value) {
      const { value: sign } = await postData('api/minecraft/sign', {
        notes: '我不知道今天发生了什么',
        signEquipment: 'iphone'
      })

      console.log(sign)

      message.success(sign.msg)

      // 更新状态
      user.value = await getData('api/user/findUserById')
    } else {
      await navigateTo('/login')
    }
  })
}

useHead({
  title: 'HuaYu服务器',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'HuaYu服务器', content: '我的世界服务器1.19.2' },
    { hid: 'keywords', name: 'keywords', content: '我的世界服务器, HuaYu,我的世界1.19.2' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
  ]
})
</script>
