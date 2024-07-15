<template>
  <Header :title="'API选择'"/>
  <div class="api-select">
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in apiList" :key="item.url" :title="item.name" />
    </van-list>
  </div>
</template>

<script>
import Header from '/src/components/Header.vue';
export default {
  name: "index",
  components: {
    Header
  },
  setup() {
    const apiList = [
      { name: "手机号码归属地查询", url: "https://api.jisuapi.com/shouji/query" },
      { name: "IP地址查询", url: "https://api.jisuapi.com/ip/location" },
      { name: "历史上的今天", url: "https://api.jisuapi.com/todayhistory/query" },
    ]
    return {
      apiList,
    };
  },
  methods: {
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