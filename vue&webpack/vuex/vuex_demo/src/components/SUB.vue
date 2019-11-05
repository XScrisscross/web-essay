<template>
  <div>
    <h3>当前count值为:{{$store.state.count}}</h3>
    <button @click="handlel">-</button>
    <button @click="handlel1">异步-13</button>
    <button @click="subAsync(100)">异步1-13</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    // 本质将全局函数映射为本地函数使用
    ...mapActions(['subAsync']),
    handlel () {
      // vue commit 传参之一
      this.$store.commit('des', 3)
    },
    handlel1 () {
      this.subAsync(13)
    }
  }

}
</script>
