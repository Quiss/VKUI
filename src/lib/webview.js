import connect from '@vkontakte/vkui-connect-promise';

export const isWebView = connect.supports('VKWebAppInit');
