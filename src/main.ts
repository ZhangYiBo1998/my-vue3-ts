import { createPinia } from 'pinia';
import { createApp } from "vue";
import App from "./App.vue";
import Router from "./routes";

const app = createApp(App);
// 使用路由器
app.use(Router);

// 创建pinia
const pinia = createPinia()
// 安装pinia
app.use(pinia);

app.mount("#app");