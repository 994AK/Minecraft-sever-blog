<template>
  <a-form
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      name="name"
      :rules="[{ required: true, message: '请输入用户名' }]"
    >
      <a-input v-model:value="formState.name" placeholder="用户名">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      name="password"
      :rules="[{ required: true, message: '请输入密码' }]"
    >
      <a-input v-model:value="formState.password" type="password" placeholder="密码">
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit" block>
        登陆
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import debounce from '~/utils/debounce.js'
const formState = reactive({
  name: '',
  password: ''
})
const onFinish = (values) => {
  debounce(async () => {
    const { code, data, msg } = await postData('api/user/login', values)

    if (code !== '1') { return message.warning(msg) }
    message.success(msg)
    await navigateTo('/users/' + data?.id)
  }, 500)
  console.log('Success:', values)
}
</script>
