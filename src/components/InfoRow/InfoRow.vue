<template>
    <div :class="classNames" v-bind="$attrs">
        <div class="InfoRow__title" v-if="title">{{ title }}</div>
        <div class="InfoRow__title" v-else-if="!!$slots.title">
            <slot name="title"></slot>
        </div>
        <div v-if="!!$slots.default">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames'

    const baseClassName = getClassName('InfoRow');

    export default {
        computed: {
            classNames() {
                return classnames(baseClassName);
            },
        },
        props: {
            title: {
                type: String,
            },
        },
    }
</script>

<style>
    @import './InfoRow.css';
</style>
