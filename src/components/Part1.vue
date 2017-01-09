<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>the first page</h1>
  </div>
</template>

<script>
export default {
  name: 'part1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
  font-size: 24px;
}
</style>
