<template>
  <div class="common-layout" style="height: 100%">
    <el-container>
      <el-aside width="auto">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              :router="true"
              style="height: 1500px"
              :collapse="isShow"
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              text-color="#fff"
              :default-active="nowUid"
              @open="handleOpen"
              @close="handleClose"
            >
              <!--              -->
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>里面有什么呢？</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">被骗咯</el-menu-item>
                  <el-menu-item index="1-2">里面</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">啥也</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>没有</template>
                  <el-menu-item index="1-4-1">啊哈哈哈</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="/" @click="backHome">
                <el-icon><icon-menu /></el-icon>
                <span>主页</span>
              </el-menu-item>
              <el-menu-item index="/meat" @click="toMeat">
                <el-icon><document /></el-icon>
                <span>肉肉列表</span>
              </el-menu-item>
              <!--              disabled-->
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>肉肉车</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container style="width: 70%; height: 100%">
        <el-header
          ><el-button type="primary" plain @click="expand"
            >展开</el-button
          ></el-header
        >
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" name="MyHome" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const nowUid = ref("/");
console.log("window.location.href", window.location.hash.slice(1));
nowUid.value = window.location.hash.slice(1);
// nowUid.value = window.location.href.substring(-6, 6);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const router = useRouter();
console.log("router.currentRoute.value", router.currentRoute.value);
const isShow = ref(false);

const expand = () => {
  isShow.value = !isShow.value;
};
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
