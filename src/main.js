import Vue from 'vue';
import App from './App.vue';
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

window.$ = window.jQuery = $;
require("./assets/front/js/theme.min");//con import no reconoco $ global
import "./assets/front/css/theme.min.css";
import store from './store/index'

//Vue.config.productionTip = false

new Vue({
    store:  store,
    render: h => h(App)
}).$mount('#app')
