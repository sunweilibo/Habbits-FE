<template>
  <div class="login-wrapper">
    <h3>登录</h3>
    <el-form>
      <el-form-item>
        <el-input v-model="userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" type="password" placeholder="密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="doSignUp" type="primary" round>
      Login
    </el-button>
    <p>
      没有账号？去<el-button @click="goSign" type="text">
        注册
      </el-button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    doSignUp () {
      VHttp.post('/login', { name: this.userName, password: this.password }).then(res => {
        this.$message('登录成功')
        console.log('🚀 ~ file: signup.vue ~ line 20 ~ VHttp.post ~ res', res)
      }).catch(e => {
        console.log('🚀 ~ file: signup.vue ~ line 22 ~ VHttp.post ~ e', e)
      })
    },
    goSign () {
      this.$emit('goSign')
    }
  }
}
</script>

<style scoped lang="scss">
.login-wrapper{

}
</style>
