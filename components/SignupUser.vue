<template>
  <a-form
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      name="email"
      :rules="[
        { required: true, message: '请输入邮箱' },
        { message: '邮箱不符合规范',pattern: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z]{2,})+$', }
      ]"
    >
      <a-input v-model:value="formState.email" placeholder="邮箱">
        <template #prefix>
          <MailOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
      name="name"
      :rules="[{ required: true, min:2, max:50, message: '请输入2-50个字用户名' }]"
    >
      <a-input v-model:value="formState.name" placeholder="用户名">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
      name="password"
      :rules="[
        { required: true, message: '请输入密码' },
        { min:5, message: '密码起码5位数吧'}
      ]"
    >
      <a-input v-model:value="formState.password" type="password" placeholder="密码">
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" block>
        注册
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import {
  UserOutlined,
  LockOutlined,
  MailOutlined
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import debounce from '~/utils/debounce.js'
const emit = defineEmits(['signupFn'])
const formState = reactive({
  name: '',
  password: '',
  email: ''
})
const onFinish = (values) => {
  debounce(async () => {
    const { code, msg } = await postData('api/user/signup', values)
    if (code !== '1') { return message.warning(msg) }
    message.success(msg)

    // 调用父级的方法 -> 切换登陆模式
    emit('signupFn')
  }, 500)
}
</script>
