<template>
  <div>登录</div>
  <div><button @click="testmongo">测试</button></div>
  <el-row class="mb-4">
    <el-button round @click="gogogo">Round</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>
</template>
<script lang="ts" name="Login" setup>
import { selectTest } from "../../service/api/testApi";
import { useRouter } from "vue-router";
const testmongo = async () => {
  const res = await selectTest({
    name: "linghau888",
    price: "233",
    buyTime: "2022-11-11",
    detail: "123",
    level: "hhh",
  });
  if (res) {
    alert("sessece");
  }
};
const router = useRouter();
const gogogo = () => {
  router.push("/meat");
};
</script>

<style scoped lang="less"></style>
