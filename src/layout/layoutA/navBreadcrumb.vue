<template>
  <div class="bread-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="bread in breadList"
        :key="bread.path"
        :to="resolveTo(bread)"
        >
        {{resolveName(bread)}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
export default {
  name: 'navBreadcrumb',
  setup () {
    const route = useRoute()
    const breadList = route.matched
    const resolveTo = (bread) => {
      if (bread.redirect) {
        return bread.redirect
      } else {
        return bread.path
      }
    }
    const resolveName = (bread) => {
      return bread.meta.title || '无'
    }

    function getBreadcrumb () {

    }

    watch(
      () => route.matched,
      (val) => getBreadcrumb()
    )
    return {
      resolveTo,
      breadList,
      resolveName
    }
  }
}
</script>

<style scoped lang="scss">
.bread-container {
  display: flex;
  align-items: center;
}
</style>
