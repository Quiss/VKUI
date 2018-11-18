import Vue from 'vue'
import App from './App.vue'
import VKUI from './index';
import PortalVue from 'portal-vue'

Vue.use(VKUI);
Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
