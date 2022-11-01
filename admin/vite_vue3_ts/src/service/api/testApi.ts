import LhRequest from "../LhRequest";

enum API {
  testGet = "/linghua", // 测试链接
  testList = "/list",
  addList = "/addMeat",
}

export const selectTest = async (param: any) => {
  console.log("请求参数", param);
  const res = await LhRequest.post(API.testGet, param);
  console.log("返回结果", res);
  return res;
};

export const useGetList = async (param?: any) => {
  console.log("List请求参数", param);
  const res = await LhRequest.post(API.testList, param);
  console.log("List返回结果", res);
  return res;
};

export const useAddBuyList = async (param?: any) => {
  console.log("Add", param);
  const res = await LhRequest.post(API.addList, param);
  console.log("Add结果", res);
  return res;
};
