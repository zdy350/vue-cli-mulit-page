<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <select-com></select-com>
  </div>
</template>

<script>
import selectCom from '../select'
export default {
  name: 'cascader',
  components: {
    selectCom
  },
  data () {
    return {
      msg: 'hello, I am the third page! cascader'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #f70;
  font-size: 24px;
}
</style>
