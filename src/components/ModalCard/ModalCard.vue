<template>
    <div :class="classNames">
        <div class="ModalCard__in">
            <div class="ModalCard__container">
                <div class="ModalCard__icon" v-if="!!$slots.icon">
                    <slot name="icon"></slot>
                </div>
                <div class="ModalCard__title" v-if="!!$slots.title">
                    <slot name="title"></slot>
                </div>
                <div class="ModalCard__caption" v-if="!!$slots.caption">
                    <slot name="caption"></slot>
                </div>

                <div v-if="!!$slots.default">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames';
    import {IOS, platform} from '../../lib/platform';

    const osname = platform();
    const baseClassName = getClassName('ModalCard');

    export default {
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
    }
</script>

<style>
    @import './ModalCard.css';
</style>

