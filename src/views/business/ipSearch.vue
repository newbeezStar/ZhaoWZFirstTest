<template>
  <Header :title="'IP地址查询'" />
  <!-- 输入手机号，调起手机号键盘 -->
  <van-field v-model="tel" type="tel" label="IP"> <template #button>
      <van-button  size="small" plain hairline type="primary" @click="handleSearch"> 查 询 </van-button>
    </template>
  </van-field>


  <van-cell-group title="IP信息">
    <van-cell title="国家" :value="country" size="large" />
    <van-cell title="地区" :value="area" size="large" />
    <van-cell title="运营商" :value="companyName" size="large" />
  </van-cell-group>

</template>
<script>
import Header from '/src/components/Header.vue';
import { userInfo, busiInfo } from '/src/store/index';
import { getRequest } from '/src/api/request.js'
import { showToast } from 'vant';
import { ref } from 'vue';
export default {
  name: "ipSearch",
  components: {
    Header
  },
  setup() {
    const tel = ref('');
    const companyName = ref('');
    const country = ref('');
    const area = ref('');
    const busi = busiInfo();
    const user = userInfo();

    const handleSearch = () => {
      if (!tel.value) {
        showToast('请输入IP号');
        return;
      }
      // 调起手机号归属地查询接口
      const url = `${busi.apiUrl}?appkey=${user.token}&ip=${tel.value}`;
      console.log(url);
      getRequest(url).then(res => {
        console.log(res);
        if (res.result) {
          companyName.value = res.result.type;
          country.value = res.result.country;
          area.value = res.result.area;
        }
      }).catch(err => {
        console.log(err);
      });

    };
    return {
      tel,
      companyName,
      area,
      country,
      handleSearch
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped></style>