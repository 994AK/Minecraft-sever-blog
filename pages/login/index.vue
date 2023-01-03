<template>
  <div>
    <a-form
      :label-col="{ span: 2 }"
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finish-failed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="name"
        :rules="[{ required: true, message: '请输入用户名哈' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: '请输入密码哈' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        label="email"
        name="email"
        :rules="[{ required: true, message: '请输入邮箱哈' }]"
      >
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 2 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'
import { postData } from '~/composables/getData'

const formState = reactive({
  name: '',
  password: '',
  email: ''
})

// 校验通过
const onFinish = async (values) => {
  const { data, msg } = await postData('api/user', values)
  if (data) {
    message.info('添加成功')
  } else {
    message.warning(msg)
  }
}
// 校验失败
const onFinishFailed = (errorInfo) => {
  // console.log('Failed:', errorInfo)
}
</script>
