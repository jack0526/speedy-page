<template>
    <div class="login-container">
      <el-form :model="loginForm" class="login-form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="pirmary" @click="submit">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup () {
    // 获取当前实例
    const { proxy } :any = getCurrentInstance()

    const passwordType = ref('password')
    const loginForm = reactive({ username: '', password: '' })
    const rules = reactive({
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    })
    const submit = () => {
      formRef.value.validate((valid: any) => {
        if (valid) {
          proxy.$message.success('success')
          ElMessage.success('成功')
        } else {
          proxy.$message.error('error')
          ElMessage.error('错误')
        }
      })
    }
    const formRef = ref()
    onMounted(() => {
      console.log('refForm', formRef.value)
    })
    return {
      loginForm,
      passwordType,
      rules,
      submit,
      formRef
    }
  }
})
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  background-color: #d3e2db;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 20%;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 10px;
}
</style>
