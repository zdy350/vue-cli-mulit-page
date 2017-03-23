<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="mint-popup" :class="[position ? 'mint-popup-' + position : '']">
      <div class="modal" v-if = "modalValue"></div>
      <slot></slot>
    </div>
  </transition>
</template>

<style>
  .mint-popup {
    /*display: none;*/
    position: absolute;
    top: 50%;
    /*width: */
    padding: 10px;
    color: #f70;
    z-index: 1111;
    background-color: #fff;
  }
  .modal {
    z-index: 11;
    position: fixed;
    top: 0;
    /*width: 100%;*/
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .7);
  }
</style>

<script type="text/babel">
  import Vue from 'vue';

  export default {
    name: 'forest-popup',
    // props: {
    //   modal: {
    //     default: true
    //   },

    //   modalFade: {
    //     default: false
    //   },

    //   lockScroll: {
    //     default: false
    //   },

    //   closeOnClickModal: {
    //     default: true
    //   },

    //   position: {
    //     type: String,
    //     default: ''
    //   }
    // },

    data () {
      return {
        currentValue: false,
        modalValue: true
      };
    },

    methods () {

    }
  };
  // export default Toast
</script>