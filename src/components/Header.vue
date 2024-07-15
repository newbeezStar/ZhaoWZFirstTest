<script lang="ts">
// import { ref } from 'vue'
import { showToast } from 'vant';
import img1 from '/src/assets/imgs/img1.jpg';
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

  },
  methods: {
    showToast() {
      showToast({
        message: '这是谁？',
        icon: img1,
      });
    }
  }
}


</script>

<template>
  <div class="title">
    <i class="iconfont icon-zwzback mx-1" v-if="showBack" @click="$emit('back')"> </i>
    <p>{{ title }}</p>
    <i class="iconfont icon-zwzmeinv mx-1" @click="showToast"> </i>
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
