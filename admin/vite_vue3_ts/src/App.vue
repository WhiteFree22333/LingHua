<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MyHome from "./views/home/MyHome.vue";
</script>

<template>
  <div class="box">
    <MyHome></MyHome>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
