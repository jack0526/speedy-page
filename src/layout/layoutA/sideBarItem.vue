<template>
  <div v-if="!item.hidden">
    <el-submenu :index="basePath" v-if="item.children&&item.children.length">
      <template #title>
        <i class="el-icon-location"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolveBasePath(child.path)"
      >
      </side-bar-item>
    </el-submenu>
    <sider-bar-link v-else :to="resolvePath(item.path)">
      <el-menu-item :index="item.path">
        <i class="el-icon-setting"></i>
        <template #title>{{item.meta.title}}</template>
      </el-menu-item>
    </sider-bar-link>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { isExternal } from '../../util'
import siderBarLink from './siderBarLink'
import { defineComponent } from 'vue'
const path = require('path')

export default defineComponent({
  name: 'sideBarItem',
  components: { siderBarLink },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const resolveBasePath = p => {
      return path.resolve(props.basePath, p)
    }
    const resolvePath = p => {
      if (isExternal(p)) {
        return p
      } else {
        return props.basePath
      }
    }
    return {
      resolveBasePath,
      resolvePath
    }
  }
})
</script>

<style scoped>

</style>
