<template>
  <div class="register-wrapper">
    <div class="content">
      <Login v-show="isLogin" @goSign="setShowType(SHOW_REGISTER)"></Login>
      <SignUp v-show="isRegister" @goLogin="setShowType(SHOW_LOGIN)"></SignUp>
    </div>
  </div>
</template>

<script>
import Login from '@/components/register/login.vue'
import SignUp from '@/components/register/signup.vue'
const SHOW_LOGIN = 1
const SHOW_REGISTER = 2
export default {
  components: {
    Login, SignUp
  },
  data () {
    return {
      showType: SHOW_REGISTER,
      SHOW_LOGIN,
      SHOW_REGISTER
    }
  },
  computed: {
    isLogin () {
      return this.showType === SHOW_LOGIN
    },
    isRegister () {
      return this.showType === SHOW_REGISTER
    }
  },
  methods: {
    setShowType (type) {
      this.showType = type
    }
  }
}
</script>

<style lang="scss" scoped>
.register-wrapper{
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ddd;
  .content{
    background: #fff;
    border-radius: 8px;
    padding: 60px 40px 40px;
  }
}
</style>