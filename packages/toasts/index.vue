<template>
  <div class="page-toast">
  	<h1>hello,world </h1>
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <button @click="openToast" size="large">点击弹出 Toast</button>
      <button @click="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</button>
      <button @click="openBottomToast" size="large">自定义 Toast 位置</button>
    </div>
  </div>
</template>
<script type="text/babel">
  // import { Toast } from './src/toast.js'
  import Toast from './src/toast.js'

  export default {
    name: 'mobile',
    methods: {
      openToast () {
        console.log('clicked')
        Toast('click it')
        // console.log(typeof Toast)
      },

      openToastWithIcon () {
        Toast({
          message: '操作成功',
          iconClass: 'mintui mintui-success'
        })
      },

      openBottomToast () {
        Toast({
          message: '提示信息',
          position: 'top'
        })
      }
    }
  }
</script>