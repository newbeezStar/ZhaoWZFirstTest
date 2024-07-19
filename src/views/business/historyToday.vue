<template>
  <Header :title="`历史上的今天`" />
  <van-cell-group :title="`${month}月${day}日`">
    <van-cell v-for="item in historyList" :key="item.title" :title="item.title" @click="() => showHtml(item)" />
  </van-cell-group>
  <van-action-sheet v-model:show="show" title="事件详情">
    <div class="content" v-html="htmlContent">

    </div>
  </van-action-sheet>
</template>
<script>
import Header from '/src/components/Header.vue';
import { userInfo, busiInfo } from '/src/store/index';
import { getRequest } from '/src/api/request.js'
import { showToast } from 'vant';
import { ref } from 'vue';
export default {
  name: "historyToday",
  components: {
    Header
  },
  setup() {
    //获取当前日期
    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day
    const historyList = ref([]);
    const busi = busiInfo();
    const user = userInfo();
    const show = ref(false);
    const htmlContent = ref('');

    const handleSearch = () => {
      const url = `${busi.apiUrl}?appkey=${user.token}&month=${month}&day=${day}`;
      console.log(url);
      getRequest(url).then(res => {
        console.log(res);
        if (res.result && res.result.length > 0) {
          historyList.value = res.result;
        }
      }).catch(err => {
        console.log(err);
      });

    };
    //显示html内容
    const showHtml = (item) => {
      show.value = true;
      htmlContent.value = item.content;
    };
    handleSearch();
    return {
      historyList,
      month,
      day,
      show,
      handleSearch,
      showHtml,
      htmlContent
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped></style>