<template>
  <div class="login-main">
    <div class="login-box">
      <div class="login-icon">
        <car-two-tone :style="{fontSize:'50px'}" />
      </div>
      <div class="login-form">
        <div class="title">
          <p>{{ handoff ? '注册页面' : '登陆页面' }}</p>
          <p>{{ handoff ? '注册用户' : '登陆用户' }}</p>
        </div>

        <div class="form">
          <LoginUser v-if="!handoff" />
          <SignupUser v-else />
        </div>
      </div>
      <div class="login-handoff">
        {{ handoff ? '已有账号?' : '没有账号?' }}  <span @click="handleHandOff">{{ handoff ? '点击这里登陆' : '点击这里注册' }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CarTwoTone
} from '@ant-design/icons-vue'
// 切换登陆与注册 false登陆页面
const handoff = ref(false)

// 登陆与注册切换
function handleHandOff () {
  handoff.value = !handoff.value
}

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
