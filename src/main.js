import Vue from 'vue'
import App from './App.vue'
import VKUI from './index';

import '@urapywka/vkui-icons'
import '@urapywka/vkui-icons/dist/vkui-icons.css'
import router from './router'

Vue.use(VKUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
