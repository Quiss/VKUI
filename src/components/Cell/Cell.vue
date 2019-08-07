<template>
    <div
            :class="classNames"
            v-bind="rootProps">
        <Tappable
                :component="selectable ? 'label' : href ? 'a' : 'div'"
                :disabled="(!selectable && !$listeners.click && !href || removable)"
                :href="href"
                :style="removable ? { transform: `translateX(-${state.removeOffset}px)` } : null"
                @click="onClickMethod"
                class="Cell__in"
                v-bind="linkProps"
        >
            <input class="Cell__checkbox" type="checkbox" v-bind="inputProps" v-if="selectable"/>
            <div class="Cell__before">
                <div class="Cell__checkbox-marker" v-if="selectable && isIOS">
                    <vkui-icon name="done" size="16"/>
                </div>
                <div @click="activateRemove" class="Cell__remove-marker" v-if="removable && isIOS"/>
                <div class="Cell__before-in" v-if="!!$slots.before">
                    <slot name="before"></slot>
                </div>
            </div>
            <div class="Cell__main">
                <div class="Cell__children">
                    <slot></slot>
                </div>
                <div class="Cell__description" v-if="description">{{ description }}</div>
                <div class="Cell__bottom" v-if="size === 'l' && !!$slots.bottomContent">
                    <slot name="bottomContent"></slot>
                </div>
            </div>
            <div class="Cell__indicator">{{ indicator }}</div>
            <div class="Cell__aside">
                <slot name="asideContent"></slot>
                <div class="Cell__checkbox-marker" v-if="selectable && isANDROID">
                    <vkui-icon name="done" size="16"/>
                </div>
                <div @click="onRemoveClick" class="Cell__remove-marker" v-if="removable && isANDROID">
                    <vkui-icon name="cancel" size="24"/>
                </div>
                <vkui-icon class="Cell__chevron" name="chevron" size="24" v-if="isIOS && expandable"/>
            </div>
        </Tappable>
        <div
                :style="removable ? { transform: `translateX(-${state.removeOffset}px)` } : null"
                @click="onRemoveClick"
                class="Cell__remove"
                ref="removeButton"
                v-if="removable && isIOS"
        >
            <span class="Cell__remove-in">{{ removePlaceholder }}</span>
        </div>
    </div>
</template>

<script>
    import getClassName from '../../helpers/getClassName';
    import classnames from '../../lib/classnames';
    import Tappable from '../Tappable/Tappable';
    import {ANDROID, IOS, platform} from '../../lib/platform';
    // TODO import icons ?

    const osname = platform();
    const baseClassName = getClassName('Cell');

    export default {
        data: () => ({
            state: {
                isRemoveActivated: false,
                removeOffset: 0,
            },
            rootProps: {},
            inputProps: {},
            linkProps: {},
        }),
        inject: {
            document: {
                default: document,
            }
        },
        props: {
            indicator: {
                type: [String, Number],
                default: '',
            },
            expandable: {
                type: Boolean,
                default: false,
            },
            // onClick: {
            // 	type: Function,
            // },
            multiline: {
                type: Boolean,
                default: false,
            },
            description: {
                type: [String, Number],
                default: '',
            },
            /**
             * Размер влияет на выравнивание блоков по вертикали, виду сепаратора (iOS) и возможности вставлять `bottomContent`.
             */
            size: {
                type: String,
                default: 'm',
                validator: (v) => ['m', 'l'].indexOf(v) >= 0
            },
            selectable: {
                type: Boolean,
                default: false,
            },
            /**
             * Флаг для перехода в режим удаляемых ячеек. **Важно:** в этом режиме обработчик onClick вызываться не будет.
             */
            removable: {
                type: Boolean,
                default: false,
            },
            onRemove: {
                type: Function,
            },
            /**
             * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
             */
            removePlaceholder: {
                type: String,
                default: 'Удалить',
            },
            href: {
                type: String,
            },
        },
        computed: {
            isIOS() {
                return osname === IOS;
            },
            isANDROID() {
                return osname === ANDROID;
            },
            classNames() {
                return classnames(baseClassName, {
                    'Cell--expandable': this.expandable,
                    'Cell--multiline': this.multiline,
                    [`Cell--${this.size}`]: this.size,
                    'Cell--removing': this.state.removing
                })
            },
            stateIsRemoveActivated() {
                return this.state.isRemoveActivated
            },
        },
        watch: {
            stateIsRemoveActivated: function (val, oldVal) {
                if (val) {
                    this.state.removeOffset = this.$refs.removeButton.offsetWidth;
                }
            }
        },
        components: {
            Tappable,
        },
        created() {
            this.rootProps = this.selectable ? {} : this.$attrs;
            this.inputProps = this.selectable ? this.$attrs : {};
            this.linkProps = this.href ? this.$attrs : {};
        },
        beforeDestroy() {
            this.document.removeEventListener('click', this.deactivateRemove);
        },
        methods: {
            /**
             * предотвращает двойное срабатывание в случае с input
             * (https://github.com/vuejs/vue/issues/3699#issuecomment-247957931)
             * предотвращает клик в случае, когда включен режим removable
             * @param e
             */
            onClickMethod(e) {
                if (e.target.tagName.toLowerCase() === 'input') {
                    e.stopPropagation();
                } else if (this.removable) {
                    return null;
                } else {
                    // this.onClick && this.onClick(e);
                    this.$emit('click', e)
                }
            },

            activateRemove(e) {
                this.state.isRemoveActivated = true;
                this.document.addEventListener('click', this.deactivateRemove);
                e.stopPropagation(); // TODO добавил
            },

            deactivateRemove() {
                this.state = Object.assign({}, this.state, {isRemoveActivated: false, removeOffset: 0});
                this.document.removeEventListener('click', this.deactivateRemove);
            },

            onRemoveClick(e) {
                // e.nativeEvent.stopImmediatePropagation(); // TODO было
                e.stopImmediatePropagation(); // TODO стало ?
                e.preventDefault();
                this.onRemove && this.onRemove(e, this.$el);
            },
        }
    }
</script>

<style>
    @import './Cell.css';
</style>
