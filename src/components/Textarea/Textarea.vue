<template>
    <VKFormField :parentClassNames="classNames">
    <textarea
            :style="{ height: height + 'px' }"
            :value="value"
            @change="onChangeMethod"
            @focus="$emit('focus')"
            class="Textarea__el"
            ref="getRef"
            v-bind="$attrs"
    />
        <div class="Textarea-underline" v-if="isANDROID"></div>
    </VKFormField>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames'
    import {ANDROID, platform} from '../../lib/platform';

    const osname = platform();
    const baseClassName = getClassName('Textarea');

    export default {
        data: () => ({
            element: null,
            height: 66
        }),
        computed: {
            isANDROID() {
                return osname === ANDROID
            },
            classNames() {
                return classnames(baseClassName)
            },
        },
        props: {
            value: {
                type: String,
                default: '',
            },
            defaultValue: {
                type: String,
                default: '',
            },
            grow: {
                type: Boolean,
                default: true,
            },
            onChange: {
                type: Function,
            },
            onResize: {
                type: Function,
                default: () => {
                }
            },
        },
        mounted() {
            if (this.grow) {
                this.resize();
            }
        },
        methods: {
            onChangeMethod(e) {
                if (this.grow) {
                    this.resize();
                }

                // ???
                // if (!this.value !== '') {
                //   this.setState({ value: e.target.value });
                // }

                if (this.onChange) {
                    this.onChange(e);
                }
            },
            resize() {
                const el = this.element;

                if (el) {
                    const {offsetHeight, scrollHeight} = el;
                    const style = window.getComputedStyle(el);
                    const paddingTop = parseInt(style.paddingTop);
                    const paddingBottom = parseInt(style.paddingBottom);

                    let diff = paddingTop + paddingBottom;

                    if (scrollHeight + diff <= offsetHeight) {
                        diff = 0;
                    }

                    if (el.value) {
                        this.state.height = scrollHeight - diff;
                    }

                    this.setState({height: 0}, () => {
                        const height = el.scrollHeight - diff;

                        this.setState({height});

                        this.props.onResize(el);
                    });
                }
            },
        }
    }
</script>

<style>
    @import './Textarea.css';
</style>
