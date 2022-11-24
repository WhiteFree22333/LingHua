<template>
  <!--  <div>登录</div>-->
  <!--  <div><button @click="testmongo">测试</button></div>-->
  <div class="lunBo">
    <el-carousel :interval="6000" type="card" height="200px" :loop="true">
      <el-carousel-item v-for="item in imageTest" :key="item.id">
        <div class="img-mask">
          <div class="titleInfo">
            <span style="font-size: larger"
              >感觉亏了寄过来的沙发上发士大夫</span
            >
          </div>
          <div class="content">
            更何况广东省刚好看见经济感觉豆腐干地方经过多方了解隔离开关几个地方几个垃圾更何况广东省刚好看见经济感觉豆腐干地方经过多方了解隔离开关几个地方几个垃圾更何况广东省刚好看见经济感觉豆腐干地方经过多方了解隔离开关几个地方几个垃圾
          </div>
        </div>
        <el-image :src="item.img" fit="cover"> </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts" name="Login" setup>
import { selectTest } from "../../service/api/testApi";
import { useRouter } from "vue-router";
import { reactive } from "vue";
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
const imageTest = reactive([
  {
    id: "1",
    img: "src/assets/xiangling.png",
  },
  {
    id: "2",
    img: "src/assets/来一啦.png",
  },
  {
    id: "3",
    img: "src/assets/来一啦2.png",
  },
]);
const router = useRouter();
</script>

<style scoped lang="less">
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__item {
  border-radius: 10px;
}
//.imgStyle {
//
//}

/deep/.el-image {
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  position: relative;
  transition: transform 1s;
}
/deep/.el-image:hover {
  transform: scale(1.3);
  transition: transform 1s;
}

.img-mask {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  background: rgba(101, 101, 101, 0.6);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: all 1s;
  .titleInfo {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: black;
    margin-top: 30px;
    position: relative;
    left: -510px;
    font-weight: 700;
    transition: all 1s;
  }
  .content {
    color: rgb(174, 167, 159);
    font-size: small;
    display: flex;
    position: relative;
    width: 90%;
    height: 90%;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    right: -510px;
    transition: all 1s;
  }
}

/deep/.el-carousel__item:hover .img-mask {
  opacity: 1;
  transition: opacity 0.5s;
  .titleInfo {
    transform: translateX(510px);
    transition: transform 1s;
  }
  .content {
    transform: translateX(-510px);
    transition: transform 1s;
  }
}

.lunBo {
  width: 1200px;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {
  .lunBo {
    width: 90%;
  }
}
</style>
