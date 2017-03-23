<template>
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible" :class="customClass">
      <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>

<style lang='less'>
  @import '../../styles/var.less';
  .mint-toast {
    position: fixed;
    max-width: 80%;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    z-index: 1111;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .7);
    /*color: @base-color;*/
    transition: opacity .3s linear;
    .mint-toast-text {
      color: #fff;
    }
    .mint-toast-icon {
      float: left;
      width: 10px;
      height: 10px;
      margin-right: 10px;
      border-radius: 5px;
      background-color: #f70;
    }
  }
  .is-placetop {
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .is-placemiddle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .is-placebottom {
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>

<script type="text/babel">
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        visible: false
      }
    },

    computed: {
      customClass () {
        var classes = []
        switch (this.position) {
          case 'top':
            classes.push('is-placetop')
            break
          case 'bottom':
            classes.push('is-placebottom')
            break
          default:
            classes.push('is-placemiddle')
        }
        classes.push(this.className)

        return classes.join(' ')
      }
    }
  }
</script>