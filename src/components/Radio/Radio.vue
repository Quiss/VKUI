<template>
    <Tappable
            :activeEffectDelay="isIOS ? 100 : ACTIVE_EFFECT_DELAY"
            :class="classNames"
            :disabled="$attrs.disabled"
            component="label"
    >
        <input :checked="checked" :value="value" @change="changeHandler" class="Radio__input" type="radio"
               v-bind="$attrs"/>
        <div class="Radio__container">
            <div class="Radio__icon"/>
            <div class="Radio__content">
                <slot></slot>
                <div class="Radio__description" v-if="description">{{ description }}</div>
            </div>
        </div>
    </Tappable>
</template>

<script>
    import Tappable, {ACTIVE_EFFECT_DELAY} from '../Tappable/Tappable';
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames'
    import {IOS, platform} from '../../lib/platform';

    const osname = platform();
    const baseClassName = getClassName('Radio');

    export default {
        model: {
            prop: 'modelValue',
            event: 'change'
        },
        computed: {
            checked() {
                return this.value == this.modelValue
            },
            isIOS() {
                return osname === IOS;
            },
            classNames() {
                return classnames(baseClassName)
            },
            ACTIVE_EFFECT_DELAY() {
                return ACTIVE_EFFECT_DELAY
            }
        },
        components: {
            Tappable,
        },
        props: {
            value: {
                type: [String, Number]
            },
            modelValue: {
                type: [String, Number],
                default: ""
            },
            description: {
                type: String,
            },
        },
        methods: {
            changeHandler() {
                this.$emit('change', this.value)
            }
        }
    }
</script>

<style>
    @import './Radio.css';
</style>
