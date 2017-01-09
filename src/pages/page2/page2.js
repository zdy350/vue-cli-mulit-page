// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Page2 from '../../components/page2/Part2'
import VueRouter from 'vue-router'
/* eslint-disable no-new */
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
import Foo from '../../components/page2/Foo'
import Bar from '../../components/page2/Bar'
const routes = [
{ path: '/foo', component: Foo },
{ path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  // template: '<Page2/>',
  components: { Page2 }
})
