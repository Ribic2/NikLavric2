require('./bootstrap');
window.Vue = require('vue');

import vue from 'vue'
import App from './app.vue'
import VueMaterial from 'vue-material'

import router from './Services/router'

vue.use(VueMaterial);

const app = new Vue({
    router: router,
    el: '#app',
    render: h => h(App)
});
