<template>
  <Header :title="'API选择'" />
  <div class="w-full">
    <div class=" h-20  my-1 bg-cover bg-center" v-for="(item, index) in apiList" :key="item.url"
      style="background-image:url('/src/assets/imgs/bg1.png')" @click=doSelect(item)>
      <div class="flex justify-around items-center h-full ">
        <div class="w-1/6 h-2/3 bg-white bg-opacity-75 rounded-full flex justify-center items-center"> <i
            class="iconfont" :class="item.icon" style="font-size: 30px; color: #fff;"></i></div>
        <div class="w-3/5 text-white font-bold text-xl"> {{ item.name }}</div>
        <!-- <div class="w-1/8 h-1/3 bg-white bg-opacity-75 rounded-full flex justify-center items-center"> <i
            class="iconfont icon-zwzright text-sm" style="font-size: 30px; color: #fff;"></i></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from '/src/components/Header.vue';
import { userInfo, busiInfo } from '/src/store/index';
import { showToast } from 'vant';
// import bg1 from '/src/assets/imgs/bg1.png';
// import bg2 from '/src/assets/imgs/bg2.png';
export default {
  name: "index",
  components: {
    Header
  },
  setup() {
    const apiList = [
      { name: "手机号码归属地查询", url: "/shouji/query", icon: 'icon-zwzphone', routerUrl: '/phoneSearch' },
      { name: "IP地址查询", url: "/ip/location", icon: 'icon-zwzIP', routerUrl: '/ipSearch' },
      { name: "历史上的今天", url: "/todayhistory/query", icon: 'icon-zwztoday', routerUrl: '/historyToday' },
    ]
    return {
      apiList,
    };
  },
  methods: {
    // calcUrl(index) {
    //   const url = index % 2 === 0 ? '/src/assets/imgs/bg1.png' : '/src/assets/imgs/bg2.png';
    //   return url;
    // }
    doSelect(item) {
      const { isLogin } = userInfo();
      const busi = busiInfo();
      if (!isLogin) {
        showToast({
          message: '请先登录',
        });
        return;
      } else {
        this.$router.push(item.routerUrl);
        busi.apiUrl = item.url;
      }
      // window.location.href = item.url;
    }
  }
};
</script>

<style lang="scss" scoped>
/*切换样式出错处理*/
.w-full {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>