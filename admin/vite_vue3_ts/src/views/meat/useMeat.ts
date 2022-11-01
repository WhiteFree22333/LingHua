import { useGetList } from "../../service/api/testApi";
import { ref } from "vue";
const meatList = ref();
const param = ref("");
const getMeat = async () => {
  meatList.value = await useGetList({ id: param.value });
  console.log("meatList.value", meatList.value);
};
export const useMeat = () => {
  return { getMeat, meatList };
};
