<template>
  <div>登录</div>
  <div><button @click="testmongo">测试</button></div>
</template>
<script lang="ts" name="Login" setup>
import { selectTest } from "../../service/api/testApi";
const testmongo = async () => {
  const res = await selectTest({ title: "hello" });
  if (res) {
    alert("sessece")
  }
}
</script>

<style scoped lang="less"></style>
