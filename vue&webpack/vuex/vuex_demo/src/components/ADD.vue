<template>
  <div>
    <!-- this省略 this.$store.state.变量 -->
    <h3>{{$store.getters.showNum()}}</h3>
    <h3>当前count值为:{{count}}</h3>
    <button @click="handel">+</button>
    <button @click="asyncHandel">异步调用+10</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['add']),
    handel () {
      // 传参之二
      this.add(5)
    },
    asyncHandel () {
      this.$store.dispatch('addAsync', 20)
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
