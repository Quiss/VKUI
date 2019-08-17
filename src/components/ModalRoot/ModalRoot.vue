<template>
    <component :class="classNames" :is="componentName" v-bind="setProps" v-on="$listeners">
        <div class="ModalRoot__mask"></div>
        <div class="ModalRoot__viewport">
            <slot></slot>
        </div>
    </component>
</template>

<script>
    import Touch from '../Touch/Touch';
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames';
    import {IOS, platform} from '../../lib/platform';

    const osname = platform();
    const baseClassName = getClassName('ModalRoot');

    export default {
        inject: {
            panel: {
                type: String,
                default: '',
            },
            document: {
                default: document,
            },
            webviewType: {
                default: 'vkapps'
            }
        },
        name: 'ModalRoot',
        components: {
            Touch
        },
        data: () => ({
            componentName: 'div',
            touchDown: false,
            switching: false,
            setProps: {},
        }),
        computed: {
            isIOS() {
                return osname === IOS;
            },
            classNames() {
                return classnames(baseClassName, {
                    'ModalRoot--vkapps': this.webviewType === 'vkapps',
                    'ModalRoot--touched': this.touchDown,
                    'ModalRoot--switching': this.switching
                });
            },
        },
        props: {
            component: {
                type: String,
                required: false,
                default: 'div'
            },
            stopPropagation: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
        created: function () {
            this.componentName = !this.disabled ? 'Touch' : this.component;
        },
    }
</script>

<style>
    @import './ModalRoot.css';
</style>
