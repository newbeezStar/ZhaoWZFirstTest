import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css'; // 引入 Vant 样式文件

createApp(App).use(Vant).mount('#app')

