<template>
    <Tappable
            :class="classNames"
            :component="theme === 'cancel' ? 'span' : 'div'"
            @click="pseudoClick"
            v-bind="$attrs"
            v-on="$listeners"
    >
        <span class="ActionSheetItem__in"><slot></slot></span>
    </Tappable>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames';
    import Tappable from '../Tappable/Tappable'

    const baseClassNames = getClassName('ActionSheetItem');

    export default {
        methods: {
            pseudoClick() {
                if (this.autoclose) {
                    this.$parent.$parent.$emit('action-sheet-close', true);
                }
            }
        },
        props: {
            theme: {
                type: String,
                default: 'default',
                validator: (v) => ['default', 'destructive', 'cancel'].indexOf(v) >= 0
            },
            autoclose: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            classNames() {
                return classnames(baseClassNames, {[`ActionSheetItem--${this.theme}`]: true});
            },
        },
        components: {
            Tappable,
        },
    }
</script>
