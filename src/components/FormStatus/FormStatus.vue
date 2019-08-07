<template>
    <div :class="classNames">
        <div class="FormStatus__title" v-if="title">{{ title }}</div>
        <div class="FormStatus__content" v-if="hasDefaultSlot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames'

    const baseClassName = getClassName('FormStatus');

    export default {
        name: 'FormStatus',
        props: {
            title: {
                type: String,
                default: '',
            },
            state: {
                type: String,
                required: false,
                validator: (v) => ['default', 'error'].indexOf(v) >= 0
            },
        },
        computed: {
            classNames() {
                const modifiers = {
                    [`FormStatus--${this.state}`]: true
                };

                return classnames(baseClassName, modifiers)
            },
            hasDefaultSlot() {
                return !!this.$slots.default
            },
        }
    }
</script>

<style>
    @import './FormStatus.css';
</style>
