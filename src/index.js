import ActionSheet from './components/ActionSheet/ActionSheet';
import ActionSheetItem from './components/ActionSheetItem/ActionSheetItem';
import Alert from './components/Alert/Alert';
import Avatar from './components/Avatar/Avatar';
import Button from './components/Button/Button';
import Cell from './components/Cell/Cell';
import CellButton from './components/CellButton/CellButton';
import Checkbox from './components/Checkbox/Checkbox';
import Div from './components/Div/Div';
import Epic from './components/Epic/Epic';
import File from './components/File/File';
import FixedLayout from './components/FixedLayout/FixedLayout';
import Footer from './components/Footer/Footer';
import FormField from './components/FormField/FormField';
import FormLayout from './components/FormLayout/FormLayout';
import FormStatus from './components/FormStatus/FormStatus';
import FormLayoutGroup from './components/FormLayoutGroup/FormLayoutGroup';
import Gallery from './components/Gallery/Gallery';
import Group from './components/Group/Group';
import Header from './components/Header/Header';
import HeaderButton from './components/HeaderButton/HeaderButton';
import HeaderContext from './components/HeaderContext/HeaderContext';
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll';
import InfoRow from './components/InfoRow/InfoRow';
import Input from './components/Input/Input';
import Link from './components/Link/Link';
import List from './components/List/List';
import Panel from './components/Panel/Panel';
import PanelHeader from './components/PanelHeader/PanelHeader';
import PanelHeaderContent from './components/PanelHeaderContent/PanelHeaderContent';
import PopoutWrapper from './components/PopoutWrapper/PopoutWrapper';
import Progress from './components/Progress/Progress';
import Radio from './components/Radio/Radio';
import Root from './components/Root/Root';
import ScreenSpinner from './components/ScreenSpinner/ScreenSpinner';
import Select from './components/Select/Select';
import SelectMimicry from './components/SelectMimicry/SelectMimicry';
import Slider from './components/Slider/Slider';
import Spinner from './components/Spinner/Spinner';
import Switch from './components/Switch/Switch';
import Tabbar from './components/Tabbar/Tabbar';
import TabbarItem from './components/TabbarItem/TabbarItem';
import Tabs from './components/Tabs/Tabs';
import TabsItem from './components/TabsItem/TabsItem';
import Tappable from './components/Tappable/Tappable';
import Textarea from './components/Textarea/Textarea';
import Touch from './components/Touch/Touch';
import View from './components/View/View';
import ModalRoot from "./components/ModalRoot/ModalRoot";
import ModalCard from "./components/ModalCard/ModalCard";


import './lib/polyfills';
import './styles/common.css';

import '@urapywka/vkui-icons'
import '@urapywka/vkui-icons/dist/vkui-icons.css'


import {platform, ANDROID, IOS} from './lib/platform';

import PortalVue from 'portal-vue';

/**
 * Utils
 */
export {default as classNames} from './lib/classnames';
export {getOffsetRect} from './lib/offset';
export {platform, ANDROID, IOS} from './lib/platform';
export {default as getClassName} from './helpers/getClassName';
export {isWebView} from './lib/webview';

// The install method will be called with the Vue constructor as
// the first argument, along with possible options
function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.use(PortalVue);

    Vue.component(`VKActionSheet`, ActionSheet);
    Vue.component(`VKActionSheetItem`, ActionSheetItem);
    Vue.component(`VKAlert`, Alert);
    Vue.component(`VKAvatar`, Avatar);
    Vue.component(`VKButton`, Button);
    Vue.component(`VKCell`, Cell);
    Vue.component(`VKCellButton`, CellButton);
    Vue.component(`VKCheckbox`, Checkbox);
    Vue.component(`VKDiv`, Div);
    Vue.component(`VKEpic`, Epic);
    Vue.component(`VKFile`, File);
    Vue.component(`VKFixedLayout`, FixedLayout);
    Vue.component(`VKFooter`, Footer);
    Vue.component(`VKFormField`, FormField);
    Vue.component(`VKFormLayout`, FormLayout);
    Vue.component(`VKFormStatus`, FormStatus);
    Vue.component(`VKFormLayoutGroup`, FormLayoutGroup);
    Vue.component(`VKGallery`, Gallery);
    Vue.component(`VKGroup`, Group);
    Vue.component(`VKHeader`, Header);
    Vue.component(`VKHeaderButton`, HeaderButton);
    Vue.component(`VKHeaderContext`, HeaderContext);
    Vue.component(`VKHorizontalScroll`, HorizontalScroll);
    Vue.component(`VKInfoRow`, InfoRow);
    Vue.component(`VKInput`, Input);
    Vue.component(`VKLink`, Link);
    Vue.component(`VKList`, List);
    Vue.component(`VKPanel`, Panel);
    Vue.component(`VKPanelHeader`, PanelHeader);
    Vue.component(`VKPanelHeaderContent`, PanelHeaderContent);
    Vue.component(`VKPopoutWrapper`, PopoutWrapper);
    Vue.component(`VKProgress`, Progress);
    Vue.component(`VKRadio`, Radio);
    Vue.component(`VKRoot`, Root);
    Vue.component(`VKScreenSpinner`, ScreenSpinner);
    Vue.component(`VKSelect`, Select);
    Vue.component(`VKSelectMimicry`, SelectMimicry);
    Vue.component(`VKSlider`, Slider);
    Vue.component(`VKSpinner`, Spinner);
    Vue.component(`VKSwitch`, Switch);
    Vue.component(`VKTabbar`, Tabbar);
    Vue.component(`VKTabbarItem`, TabbarItem);
    Vue.component(`VKTabs`, Tabs);
    Vue.component(`VKTabsItem`, TabsItem);
    Vue.component(`VKTappable`, Tappable);
    Vue.component(`VKTextarea`, Textarea);
    Vue.component(`VKTouch`, Touch);
    Vue.component(`VKView`, View);
    Vue.component(`VKModalRoot`, ModalRoot);
    Vue.component(`VKModalCard`, ModalCard);


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
