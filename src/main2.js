import Vue from 'vue';
import VueRouter from "vue-router";
import store from './store/index'

import App from './App2.vue';

import $ from "jquery";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";


window.$ = window.jQuery = $;
require("./assets/front/js/theme.min");//con import no reconoco $ global
import "./assets/front/css/theme.min.css";
import Empty from "./components/Empty";


//Vue.config.productionTip = false

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>fooxxxxxxxxxxxxxxxxxxx</div>' }
const Bar = { template: '<div>barxxxxxxxxxxxxxxxxxxxx</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/empty', component: Empty}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    router,
    store:  store,
    render: h => h(App)
}).$mount('#app')
