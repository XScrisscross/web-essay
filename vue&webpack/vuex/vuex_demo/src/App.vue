<template>
  <div id="app">
    <des></des>
    <hr>
    <add></add>
  </div>
</template>

<script>
import ADD from './components/ADD.vue'
import SUB from './components/SUB.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    'des': SUB,
    'add': ADD
  }
}
</script>
