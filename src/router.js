import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import Users from "@/views/Users.vue";
import Payrolls from "@/views/Payrolls.vue"
import Recruitments from "@/views/Recruitments.vue"



Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: Dashboard,
            children: [
                {
                    path: "/users",
                    name: "users",
                    component: Users
                },
                {
                    path: "/payrolls",
                    name: "payrolls",
                    component: Payrolls
                },
                {
                    path: "/recruitments",
                    name: "recruitments",
                    component: Recruitments
                }
            ]
        }
    ]
})
