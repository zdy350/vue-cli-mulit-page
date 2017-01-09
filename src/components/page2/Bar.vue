<template>
  <div class="bar">
    <h1>I am shown by the vue-router</h1>
    <h1>I am the <strong class="bold">bar</strong> component</h1>
  </div>
</template>

<script>
export default {
  name: 'bar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blue;
  font-size: 24px;
}
.bold {
	font-size: 30px;
	background-color: #f60;
}
</style>
