<template>
    <Tappable :activeEffectDelay="200" :class="classes" component="button" v-bind="$attrs" v-on="$listeners">
        <span class="HeaderButton__primitive" v-if="isPrimitive"><slot></slot></span>
        <slot v-else></slot>
    </Tappable>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames'
    import Tappable from '../Tappable/Tappable'

    const baseClassName = getClassName('HeaderButton');

    export default {
        props: {
            primary: {
                type: Boolean,
                default: false,
            },
        },
        components: {
            Tappable,
        },
        computed: {
            isPrimitive() {
                return (!!this.$slots.default && typeof this.$slots.default[0]["text"] !== 'undefined') || (!!this.$slots.children && typeof this.$slots.children[0]["text"] !== 'undefined');
            },
            classes() {
                return classnames(baseClassName, {
                    'HeaderButton--primary': this.primary
                });
            }
        },
    }
</script>

<style>
    @import './HeaderButton.css';
</style>
