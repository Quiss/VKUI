<template>
    <div :class="classNames" v-bind="$attrs" v-on="$listeners">
        <div class="TabbarItem__in">
            <slot></slot>
            <span class="TabbarItem__label" v-if="label">{{ label }}</span>
        </div>
    </div>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames'

    const baseClassName = getClassName('TabbarItem');

    export default {
        computed: {
            classNames() {
                return classnames(baseClassName, {
                    'TabbarItem--selected': this.selected
                })
            },
        },
        props: {
            label: {
                type: String,
            },
            selected: {
                type: Boolean,
                required: false,
                default: false
            },
        },
    }
</script>

<style>
    @import './TabbarItem.css';
</style>
