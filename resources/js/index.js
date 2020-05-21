import Vue from 'vue';
import Store from './Store';


const files = require.context('./components/', false, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

let app = new Vue({
    el: '#app',
    data: Store
});