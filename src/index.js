import * as components from './components'

import './lib/polyfills';
import './styles/common.css';

import '@urapywka/vkui-icons'
import '@urapywka/vkui-icons/dist/vkui-icons.css'


import { platform, ANDROID, IOS } from './lib/platform';

import PortalVue from 'portal-vue';

/**
 * Utils
 */
export { default as classNames } from './lib/classnames';
export { getOffsetRect } from './lib/offset';
export { platform, ANDROID, IOS } from './lib/platform';
export { default as getClassName } from './helpers/getClassName';
export { isWebView } from './lib/webview';

// The install method will be called with the Vue constructor as
  // the first argument, along with possible options
function install (Vue) {
  if (install.installed) return;
  install.installed = true;

  Vue.use(PortalVue);

  for (const key in components) {
    Vue.component(`VK${key}`, components[key]);
  }

  Vue.prototype.$VKUI_OSNAME = platform();
  Vue.prototype.$VKUI_ANDRIOD = ANDROID;
  Vue.prototype.$VKUI_IOS = IOS;
}

// Создание значения модуля для Vue.use()
const plugin = {
  install
};

// Автоматическая установка, когда vue найден (например в браузере с помощью тега <script>)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default {
  install
}
