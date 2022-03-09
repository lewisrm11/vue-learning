import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "./components/Auth/Auth";
import Singing from "./components/Auth/Singing";

const routes = [
    {
        path: "/auth",
        component: Auth
    },
    {
        path: "/singing",
        component: Singing
    }
];

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
});



export default router;