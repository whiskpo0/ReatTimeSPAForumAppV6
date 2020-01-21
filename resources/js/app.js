
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {}
 
export default new Vuetify(opts)
 
window.Vuetify = require("vuetify");


Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from '../js/components/Router/router.js'

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(), 
    router
});

 