<template>
  <VKFormField :parentClassNames="classNames">
    <input
            v-bind="$attrs"
            class="Input__el"
            ref="input"
            :type="type"
            :placeholder="customPlaceholder ? null : placeholder"
            :value="value"
            @input="changeHandler"
            @focus="focusHandler"
    />
  </VKFormField>
</template>

<script>
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames'
import {platform, ANDROID} from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('Input');

export default {
  data: () => ({

  }),
  // components: {
  //   FormField,
  // },
  inject: {
    isWebView: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    isANDROID () {
      return osname === ANDROID
    },
    classNames () {
      const modifiers = {
        'Input--center': this.alignment === 'center',
        'Input--right': this.alignment === 'right',
        [`FormField--s-${this.status}`]: true
      };
      return classnames(baseClassName, modifiers)
    },
    customPlaceholder () {
      return ['date', 'datetime-local', 'time', 'month'].indexOf(this.type) > -1 && this.isWebView ? this.placeholder : null;
    }
  },
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: (v) => [
        'text', 'password',
        'date', 'datetime-local', 'time', 'month',
        'email', 'number', 'tel', 'url'
      ].indexOf(v) >= 0
    },
    alignment: {
      type: String,
      required: false,
      default: 'left',
      validator: (v) => ['left', 'center', 'right'].indexOf(v) >= 0
    },
    placeholder: {
      type: String,
    },
    status: {
      type: String,
      required: false,
      default: 'default',
      validator: (v) => ['default', 'error', 'valid'].indexOf(v) >= 0
    },
  },
  methods: {
    changeHandler () {
      this.$emit('input', this.$refs.input.value)
    },
    focusHandler (e) {
      this.$emit('focus', e)
    }
  }
}
</script>

<style>
@import './Input.css';
</style>
