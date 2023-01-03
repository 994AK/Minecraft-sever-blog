<template>
  <div class="login-main">
    <div class="login-box">
      <div class="login-icon">
        <n-icon size="50" color="#277ffe">
          <NutritionOutline v-if="handoff" />
          <NutritionSharp v-else />
        </n-icon>
      </div>
      <div class="login-form">
        <div class="title">
          <p>{{ handoff ? '注册页面' : '登陆页面' }}</p>
          <p>祝你{{ handoff ? '注册愉快' : '登陆愉快' }}</p>
        </div>

        <div class="form">
          <!-- 登陆模块  -->
          <n-form
            v-if="!handoff"
            ref="formRef"
            size="medium"
          >
            <n-form-item :show-label="false">
              <n-input placeholder="输入邮箱">
                <template #prefix>
                  <n-icon size="25" color="#277ffe">
                    <Mail />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item :show-label="false">
              <n-input placeholder="输入密码">
                <template #prefix>
                  <n-icon size="25" color="#277ffe">
                    <LockClosed />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>

            <n-button
              class="btn"
              type="info"
            >
              登陆
            </n-button>
          </n-form>
          <!-- 注册模块  -->
          <n-form
            v-else
            ref="formRef"
            size="medium"
          >
            <n-form-item :show-label="false">
              <n-input placeholder="输入用户名">
                <template #prefix>
                  <n-icon size="25" color="#277ffe">
                    <Accessibility />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>

            <n-form-item :show-label="false">
              <n-input placeholder="输入邮箱">
                <template #prefix>
                  <n-icon size="25" color="#277ffe">
                    <Mail />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item :show-label="false">
              <n-input placeholder="输入密码">
                <template #prefix>
                  <n-icon size="25" color="#277ffe">
                    <LockClosed />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>
            <n-button
              class="btn"
              type="info"
            >
              注册
            </n-button>
          </n-form>
        </div>
      </div>
      <div class="login-handoff">
        没有账号? <span @click="handleHandOff">{{ handoff ? '点击这里登陆' : '点击这里注册' }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, LockClosed, NutritionSharp, Accessibility, NutritionOutline } from '@vicons/ionicons5'
// 切换登陆与注册 false登陆页面
const handoff = ref(false)

// 登陆与注册切换
function handleHandOff () {
  handoff.value = !handoff.value
}
// import { postData } from '~/composables/getData'

// const formState = reactive({
//   name: '',
//   password: '',
//   email: ''
// })
//
// // 校验通过
// const onFinish = async (values) => {
//   const { data, msg } = await postData('api/user', values)
//   if (data) {
//     message.info('添加成功')
//   } else {
//     message.warning(msg)
//   }
// }
// // 校验失败
</script>

<style lang="scss" scoped>
.login-main {
  min-height: 100vh;
  background: #f2f5ff;
  display: flex;
  justify-content:center;
  align-items: center;

  .login-box {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    flex: 0 0 800px;
    .login-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .login-form {
      min-height: 400px;
      gap: 30px 0;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;

      .title {
        display:flex;
        flex-direction:column;
        align-items: center;

        p:nth-child(1) {
          color: #0047e1;
          font-size: 28px;

        }

        p:nth-child(2) {
          color: #777;
          font-size: 16px;
        }
      }

      .btn {
        width: 100%;
        margin-bottom: 30px;
      }
    }

    .login-handoff {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        color: #0173cd;
        cursor: pointer;
      }
    }
  }
}

</style>
