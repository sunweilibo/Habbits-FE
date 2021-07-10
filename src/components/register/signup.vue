<template>
  <div class="signup-wrapper">
    <h4>注册</h4>
    <el-form>
      <el-form-item>
        <el-input v-model="userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="email" placeholder="邮箱"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="doSignUp" type="primary" round>
      Sign Up
    </el-button>
    <p class="bottom">
      已经有账号了？去
      <el-button @click="goLogin" type="text">
        登录
      </el-button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      email: ''
    }
  },
  methods: {
    doSignUp () {
      VHttp.post('/register', { name: this.userName, password: this.password, email: this.email }).then(res => {
        console.log('🚀 ~ file: signup.vue ~ line 20 ~ VHttp.post ~ res', res)
      }).catch(e => {
        console.log('🚀 ~ file: signup.vue ~ line 22 ~ VHttp.post ~ e', e)
      })
    },
    goLogin () {
      this.$emit('goLogin')
    }
  }
}
</script>

<style scoped lang="scss">
.signup-wrapper{

}
</style>
