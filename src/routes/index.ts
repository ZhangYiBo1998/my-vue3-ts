// // 该文件专门用于创建整个应用的路由器
import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Person from "../components/Person.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            component: App,
            children: [],
        },
        {
            path: "/person",
            component: Person,
        },
        {
            path: "/",
            redirect: "/home",
        },
    ],
});

export default router;
