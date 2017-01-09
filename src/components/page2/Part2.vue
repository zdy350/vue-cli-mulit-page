<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/foo">Go to foo </router-link>
    </p>
    <p>
      <router-link to="/bar">go to bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Foo from './Foo'
// import Bar from './Bar'

// const routes = [
// { path: '/foo', component: Foo },
// { path: '/bar', component: Bar }
// ]

// const router = new VueRouter({
//   routes
// })

// Vue.use(VueRouter)

export default {
  // el: '.hello',
  name: 'part2',
  // router,
  data () {
    return {
      msg: 'hello,I am the page2 home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blue;
  font-size: 24px;
}
</style>
