<template>
  <div>登录</div>
  <div><button @click="testmongo">测试</button></div>
  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>
</template>
<script lang="ts" name="Login" setup>
import { selectTest } from "../../service/api/testApi";
const testmongo = async () => {
  const res = await selectTest({ name: "linghau233" });
  if (res) {
    alert("sessece");
  }
};
</script>

<style scoped lang="less"></style>
