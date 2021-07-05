<template>
  <div class="signup-wrapper">
    <el-form>
      <el-form-item>
        <el-input v-model="userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="doSignUp">
      Sign Up
    </el-button>
    <p>
      change to <el-button @click="goLogin" type="text">
        login
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
      VHttp.post('/register', { name: this.userName, password: this.password }).then(res => {
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
