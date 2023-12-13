import App from './App.vue'
import router from './router'; // 导入路由实例
import Antd from 'ant-design-vue';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import './styles/globe.less'; // 导入全局Less文件
import 'ant-design-vue/dist/reset.css';


const pinia = createPinia()
const app = createApp(App);

app.use(router); // 使用路由
app.use(pinia)
app.use(Antd)
app.mount('#app')