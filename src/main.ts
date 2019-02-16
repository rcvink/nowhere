import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import './registerServiceWorker';

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  render: (h) => h(App),
});

Vue.use(VueResource);
vue.$mount('#app');
