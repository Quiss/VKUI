<template>
    <Button
            :align="align"
            :class="classNames"
            :level="level"
            :size="size"
            :stretched="stretched"
            :type="type"
            component="label"
    >
        <slot name="before" slot="before" v-if="!!$slots.before"></slot>
        <input class="File__input" type="file" v-bind="$attrs"/>
        <slot>Выберите файл</slot>
    </Button>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames';
    import Button from '../Button/Button';

    const baseClassName = getClassName('Button');

    export default {
        data: () => ({
            state: {
                value: null,
            }
        }),
        computed: {
            classNames() {
                return classnames(baseClassName)
            },
        },
        components: {
            Button,
        },
        props: {
            level: {
                type: String,
            },
            size: {
                type: String,
                required: false,
            },
            type: {
                type: String,
                required: false,
            },
            align: {
                type: String,
                required: false,
                default: 'left',
            },
            stretched: {
                type: Boolean,
                required: false,
            },
        },
    }
</script>

<style>
    @import './File.css';
</style>
