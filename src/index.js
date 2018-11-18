import * as components from './components'

import './lib/polyfills';
import './styles/common.css';

import '@urapywka/vkui-icons'
import '@urapywka/vkui-icons/dist/vkui-icons.css'


import { platform, ANDROID, IOS } from './lib/platform';

/**
 * Utils
 */
export { default as classnames } from './lib/classnames';
export { default as keyframes } from './lib/keyframes';
export { getOffsetRect } from './lib/offset';
export { platform, ANDROID, IOS } from './lib/platform';
export { default as removeObjectKeys } from './lib/removeObjectKeys';
export { default as request } from './lib/request';
export { default as querystring } from './lib/querystring';
export { default as getClassName } from './helpers/getClassName';
export { default as requestAnimationFrame } from './lib/requestAnimationFrame';
export { isWebView } from './lib/webview';

export default {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install (Vue) {
  	for (const key in components) {
  		Vue.component(key, components[key])
  	};

  	Vue.prototype.$VKUI_OSNAME = platform();
  	Vue.prototype.$VKUI_ANDRIOD = ANDROID;
  	Vue.prototype.$VKUI_IOS = IOS;
  }
}