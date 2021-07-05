<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script>
import HelloWorld from '@/components/home/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  mounted () {
    VHttp.get('/abc').then(res => {
      console.log('🚀 ~ file: Home.vue ~ line 14 ~ VHttp ~ res', res)
    }).catch(e => {
      console.log('🚀 ~ file: Home.vue ~ line 16 ~ VHttp ~ e', e)
    })
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>