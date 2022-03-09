import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

window.$ = window.jQuery = $;
require("./assets/front/js/theme.min");//con import no reconoco $ global
import "./assets/front/css/theme.min.css";

import Vue from 'vue';
import router from "./routes";
import App from './App.vue';
import store from './store/index'




new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
