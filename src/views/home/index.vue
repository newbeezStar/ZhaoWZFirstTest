<template>
  <!-- <router-view class="router-view" /> -->
   <h>首页</h>
   <van-button type="primary" size="large" @click="tabChange">api列表</van-button>
</template>

<script>
export default {
  name: "index",
  setup() {
    return {};
  },
  methods: {
    tabChange() {
      this.$router.push({ path: "/apiSelect" });
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