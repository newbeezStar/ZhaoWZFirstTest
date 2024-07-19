<script lang="js">
// import { ref } from 'vue'
import { showToast } from 'vant';
import cyc from '/src/assets/imgs/cyc.jpg';
import zwz from '/src/assets/imgs/zwz.jpg';
import { userInfo } from '/src/store/index';
// import { defineProps } from 'vue';
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '标题'
    },
    showBack: {
      type: Boolean,
      default: true // 默认显示返回按钮
    }
  },
  setup() {
    let user = userInfo();
    return {
      user
    }
  },
  methods: {
    showToast() {
      let user = userInfo();
      showToast({
        message: '这是谁？',
        icon: user.isLogin ? zwz : cyc,
      });
      user.isLogin = !user.isLogin;
      user.token = user.isLogin ? 'e5fa5b782017fab6' : '';
    },
    back() {
      window.history.go(-1);
    }
  }
}


</script>

<template>
  <div class="title">
    <i class="iconfont icon-zwzback mx-1 " v-if="showBack" @click="back"> </i>
    <p>{{ title }}</p>
    <i class="iconfont  mx-1 " :class="{ 'icon-zwzmeinv': !user.isLogin, 'icon-zwzmeinv-green': user.isLogin }"
      @click="showToast"> </i>
  </div>
</template>

<style scoped>
.title {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 999;
  box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.3);
}
</style>
