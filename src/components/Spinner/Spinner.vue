<template>
    <div :class="classNames">
        <vkui-icon name="spinner" :size="44" class="Spinner__self"/>
    </div>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames'
    import {ANDROID, IOS, platform} from '../../lib/platform';
    import AndroidSpinner from './AndroidSpinner';
    import IosSpinner from './IosSpinner';

    const osname = platform();
    const baseClassName = getClassName('Spinner');

    export default {
        computed: {
            isIOS() {
                return osname === IOS
            },
            isANDROID() {
                return osname === ANDROID
            },
            classNames() {
                const modifiers = {
                    'Spinner--on': this.isAnimated
                };
                return classnames(baseClassName, modifiers)
            },
            isAnimated() {
                return this.on && this.progress === null;
            },
            component() {
                return this.isIOS ? 'IosSpinner' : 'AndroidSpinner';
            },
        },
        components: {
            AndroidSpinner,
            IosSpinner,
        },
        props: {
            size: {
                type: Number,
                default: function () {
                    return this.isANDROID ? 38 : 20
                },
            },
            androidStrokeWidth: {
                type: Number,
                default: 4,
            },
            on: {
                type: Boolean,
                default: true,
            },
            progress: {
                type: Number,
                default: null
            },
        },
    }
</script>

<style>
    @import './Spinner.css';
</style>
