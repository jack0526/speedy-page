<script>
import { defineComponent, ref, resolveComponent, h, reactive } from 'vue'
import mitt, { Emitter } from 'mitt'
export default {
  name: 'index',
  setup () {
    const formModel = ref({ name: 'af' })
    return {
      formModel
    }
  },
  render () {
    return h(
      resolveComponent('ElForm'),
      {
        model: this.formModel,
        labelWidth: '120px'
      },
      () => h(
        resolveComponent('ElFormItem'),
        {
          label: '小明同学哈哈'
        },
        () => h(
          resolveComponent('ElInput'),
          {
            modelValue: this.formModel.name,
            // eslint-disable-next-line no-return-assign
            'onUpdate:modelValue': (val) => this.formModel.name = val
          }
        )
      )
    )
  }
}
</script>

<style scoped>

</style>
