<template>
  <!-- <router-view class="router-view" /> -->
   <h>123</h>
   <van-button type="primary" size="large" @click="tabChange(1)">跳转</van-button>
</template>

<script lang="ts" >
export default {
  name: "index",
  setup() {
    return {};
  },
  methods: {
    tabChange(active) {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<style lang="scss" scoped>
/*切换样式出错处理*/
.router-view {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>