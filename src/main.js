import Vue from 'vue'
import App from './App.vue'
import VKUI from './index';

Vue.use(VKUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
