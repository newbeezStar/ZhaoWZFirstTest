<template>
  <Header :title="'手机号归属地查询'" />
  <!-- 输入手机号，调起手机号键盘 -->
  <van-field v-model="tel" type="tel" label="手机号"> <template #button>
      <van-button  size="small" plain hairline type="primary" @click="handleSearch"> 查 询 </van-button>
    </template>
  </van-field>


  <van-cell-group title="归属地信息">
    <van-cell title="运营商" :value="companyName" size="large" />
    <van-cell title="省" :value="province" size="large" />
    <van-cell title="市" :value="city" size="large" />
    <van-cell title="区号" :value="areacode" size="large" />
  </van-cell-group>

</template>
<script>
import Header from '/src/components/Header.vue';
import { userInfo, busiInfo } from '/src/store/index';
import { getRequest } from '/src/api/request.js'
import { showToast } from 'vant';
import { ref } from 'vue';
export default {
  name: "phoneSearch",
  components: {
    Header
  },
  setup() {
    const tel = ref('');
    const companyName = ref('');
    const province = ref('');
    const city = ref('');
    const areacode = ref('');
    const busi = busiInfo();
    const user = userInfo();

    const handleSearch = () => {
      if (!tel.value) {
        showToast('请输入手机号');
        return;
      }
      // 调起手机号归属地查询接口
      const url = `${busi.apiUrl}?appkey=${user.token}&shouji=${tel.value}`;
      console.log(url);
      getRequest(url).then(res => {
        console.log(res);
        if (res.result) {
          companyName.value = res.result.company;
          province.value = res.result.province;
          city.value = res.result.city;
          areacode.value = res.result.areacode;
        }
      }).catch(err => {
        console.log(err);
      });

    };
    return {
      tel,
      companyName,
      province,
      city,
      areacode,
      handleSearch
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped></style>