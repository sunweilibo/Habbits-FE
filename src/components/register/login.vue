<template>
  <div class="login-wrapper">
    <el-form>
      <el-form-item>
        <el-input v-model="userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="doSignUp">
      Login
    </el-button>
    <p>
      change to <el-button @click="goSign" type="text">
        sign up
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
