<template>
  <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="newCount++">
    count is: {{ newCount }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  props: {
    msg: {
      type: String,
      default: 'hhhh'
    }
  },
  setup (props) {
    const newCount = ref(0)
    const state = reactive({ count: 0 })
    return { state, newCount }
  }
}

// defineProps({
//   msg: String
// }),
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
