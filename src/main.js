import Vue from 'vue';
import App from './App.vue';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.css';
import VueRouter from 'vue-router';
import Cabecera from './components/Cabecera.vue';

//loesa@tecmilenio.mx
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: Cabecera}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
