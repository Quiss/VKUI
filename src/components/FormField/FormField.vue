<template>
    <div :class="classNames">
        <slot></slot>
        <div class="FormField__border"/>
    </div>
</template>


<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames'

    const baseClassName = getClassName('FormField');

    export default {
        name: 'FormField',
        props: {
            parentClassNames: {
                default: []
            },
        },
        computed: {
            classNames() {
                return classnames(baseClassName, this.parentClassNames)
            },
        }
    }
</script>

<style>
    @import './FormField.css';
</style>
