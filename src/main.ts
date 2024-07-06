import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css'; // 引入 Vant 样式文件
import router from './router'

// 创建 Vue 实例并挂载

// createApp(App).use(Vant).mount('#app')


const app = createApp(App);
app.use(Vant)
app.use(router)
app.mount("#app")