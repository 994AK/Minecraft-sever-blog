<template>
  <div>
    <div class="px-5 text-xl pb-2 border-b ">
      个人资料
    </div>
    <div class="px-10 mt-4">
      <form method="post" class="form-example" onsubmit="return false">
        <div class="border-t border-b p-4 flex items-center">
          <div class="mr-10 w-[60px]">
            上传头像
          </div>
          <div class="w-1/4">
            <a-upload
              v-model:file-list="profileRules.imageUrl"
              name="image"
              :accept="null"
              list-type="picture-card"
              :show-upload-list="false"
              :action="envUrl + 'api/upload/file'"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="profileForm.imageUrl" :src="envUrl + profileForm.imageUrl" alt="avatar">
              <div v-else>
                <div class="ant-upload-text">
                  上传头像
                </div>
              </div>
            </a-upload>
          </div>
        </div>
        <div class="border-b p-4 flex items-center">
          <div class="mr-10 w-[60px]">
            游戏ID
          </div>
          <div class="w-1/4">
            <input
              v-model="profileForm.gamesName"
              maxlength="30"
              class="border rounded-md py-1 px-3  w-full placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="输入游戏ID"
            >
          </div>
          <div v-if="profileRules.gamesName" class="text-sm pl-3 text-red-600">
            请上传头像
          </div>
        </div>
        <div class="border-b p-4 flex items-center">
          <div class="mr-10 w-[60px]">
            简介
          </div>
          <div class="w-1/4">
            <input
              v-model="profileForm.info"
              maxlength="80"
              class="border rounded-md py-1 px-3  w-full placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="输入个人简介只能输80字"
            >
          </div>
          <div v-if="profileRules.info" class="text-sm pl-3 text-red-600">
            请输入简介
          </div>
        </div>
        <div class="px-10 mt-4">
          <button
            class="py-2 px-4 "
            :class="[profileForm.gamesName && profileForm.info && !disable ? 'success' : 'disable']"
            @click="handleSuccess"
          >
            保存修改
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'

const envUrl = ref(process.env.NODE_ENV !== 'development' ? 'http://159.75.79.184:3000/' : 'http://localhost:3000/')

const user = await getData('api/user/findUserById')

const useProfileEffects = () => {
  const profileForm = reactive({
    gamesName: '',
    info: '',
    imageUrl: ''
  })

  const profileRules = reactive({
    gamesName: false,
    info: false
  })

  // 禁用判断
  const disable = ref(false)
  const gamesName = ref('')
  const info = ref('')
  const imageUrl = ref('')

  // 数据回显处理
  const handleEcho = (val) => {
    profileForm.gamesName = val.gamesName
    profileForm.info = val.info
    profileForm.imageUrl = val.imageUrl
  }

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      return
    }
    if (info.file.status === 'done') {
      profileForm.imageUrl = info.fileList[0].response.data?.filename
    }
    if (info.file.status === 'error') {
      message.error('upload error')
    }
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG file!')
    }
    const isLt10M = file.size / 1024 / 1024 < 2
    if (!isLt10M) {
      message.error('Image must smaller than 10MB!')
    }
    return isJpgOrPng && isLt10M
  }

  // 发起请求
  const handlePostSuccess = async () => {
    const res = await postData('api/user/updateFineUser', {
      gamesName: gamesName.value,
      info: info.value,
      imageUrl: imageUrl.value
    })

    if (res.value?.code === 200) {
      message.success('保存成功')
      disable.value = false
    } else {
      message.warning(res.value?.data.msg)
      disable.value = false
    }
  }

  // 处理请求值
  const handleSuccess = () => {
    profileRules.gamesName = !profileForm.gamesName
    profileRules.info = !profileForm.info
    gamesName.value = profileForm.gamesName
    info.value = profileForm.info
    imageUrl.value = profileForm.imageUrl

    handlePostSuccess()

    disable.value = true
  }

  return {
    profileForm,
    profileRules,
    disable,
    handleEcho,
    beforeUpload,
    handleChange,
    handleSuccess
  }
}

const { profileForm, profileRules, disable, handleEcho, beforeUpload, handleChange, handleSuccess } = useProfileEffects()

if (user?.data) {
  // 用户绑定后,回显请求返回值
  handleEcho(user.data)
}

</script>

<style lang="scss" scoped>
// 禁用
.disable {
 @apply bg-gray-300 text-white rounded-md cursor-no-drop
}

.success {
  @apply bg-blue-600 text-white rounded-md hover:bg-blue-700
}
</style>
