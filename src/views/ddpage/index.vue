<template>
  <speedy-page ref="pageRef"></speedy-page>
</template>

<script>
import SpeedyPage from '@/components/speedy/SpeeyPage/index'
import { config, treeData } from './data'
import { onMounted, ref } from 'vue'
import { getPageList } from '@/api/mock'
export default {
  name: 'index',
  components: { SpeedyPage },
  setup () {
    const pageRef = ref(null)
    onMounted(async () => {
      const page = pageRef.value.speedyPage
      if (!page) return
      page.setOptions(config)
      page.setStore({
        sex: [{ label: '男', value: 1 }, { label: '女', value: 0 }],
        address: [
          { label: '南京', value: '1' },
          { label: '北京', value: '2' },
          { label: '上海', value: '3' },
          { label: '广州', value: '4' },
          { label: '遂宁', value: '5' },
          { label: '曹县', value: '5' }
        ],
        addressName: treeData
      })

      page.on({
        'form:sex:change': () => {}
      })
      page.on({
        'button:create:click': (form) => {
          console.log('button:create:click', form)
          form.sex = 0
          form.sex2 = 1
        },
        'button:edit:click': (form) => {
        }
      })
      const result = await getPageList()

      page.setRows(result)
    })
    return {
      pageRef
    }
  }
}
</script>

<style scoped>

</style>
