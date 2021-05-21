<template>
    <button
      :class="[
        'y-button',
        type ? 'y-button--'+type : '',
      ]"
      >
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface YButtonProps {
  type: string,
  size: string,
  icon: string,
  nativeType: string,
  loading: boolean,
  disabled: boolean,
  plain: boolean,
  autofocus: boolean,
  round: boolean,
  circle: boolean
}

type YButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
type YButtonSizeType = PropType<'mini' | 'small' | 'mediumn' | 'large'>
type YButtonNativeType = PropType<'button' | 'reset' | 'submit'>

export default defineComponent({
  name: 'YButton',
  props: {
    type: {
      type: String as YButtonType,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text'
        ].includes(val)
      }
    },
    size: {
      type: String as YButtonSizeType,
      default: 'mediumn',
      validator: (val: string) => {
        return [
          'mini',
          'small',
          'mediumn',
          'large'
        ].includes(val)
      }
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String as YButtonNativeType,
      default: 'button',
      validator: (val: string) => {
        return [
          'button',
          'reset',
          'submit'
        ].includes(val)
      }
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  setup (prop, ctx) {

  }
})
</script>

<style scoped>

</style>
