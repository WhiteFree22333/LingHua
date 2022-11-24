<template>
  <el-row
    :gutter="10"
    justify="start"
    style="height: 100vh; padding-bottom: 8rem"
  >
    <!--      :offset="index > 0 ? 0 : 0"-->
    <el-col
      :span="24"
      style="
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        height: 100%;
        overflow-y: scroll;
      "
    >
      <el-card
        v-for="(o, index) in meatShowList"
        :key="index"
        v-infinite-scroll="load"
        style="margin: 10px 10px 0 0"
        :body-style="{}"
        shadow="hover"
      >
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 5px">
          <span>{{ o.name }}</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button
              plain
              round
              type="danger"
              class="button"
              @click="eatShe(o._id)"
              >吃她</el-button
            >
          </div>
        </div>
      </el-card>
      <div></div>
    </el-col>
  </el-row>
</template>
<script lang="ts" name="meat" setup>
import { onMounted, ref } from "vue";
import { useMeat } from "./useMeat";
import { useAddBuyList } from "../../service/api/testApi";

const currentDate = ref(new Date());
const { getMeat, meatList } = useMeat();
const meatShowList = ref();

onMounted(async () => {
  await getMeat();
  console.log("meatList.value.data", meatList.value);
  meatShowList.value = meatList.value.data;
});

const eatShe = async (id: string) => {
  const res = await useAddBuyList({ id: id });
  if (res) {
    alert(res);
  }
};
const count = ref(0);
const load = () => {
  count.value += 2;
};
</script>

<style scoped lang="less">
.time {
  font-size: 12px;
  margin-right: 8px;
  color: #999;
}

.bottom {
  margin-top: 5px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  width: 6rem;
  min-height: auto;
}

.image {
  width: auto;
  height: auto;
  max-width: 70%;
  max-height: 70%;
  margin: auto;
  display: block;
}
.zhanwei {
}
</style>
