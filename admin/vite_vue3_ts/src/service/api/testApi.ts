import LhRequest from "../LhRequest";

enum API {
  testGet = "/linghua", // 测试链接
}

export const selectTest = async (param: any) => {
  console.log("请求参数", param);
  const res = await LhRequest.post(API.testGet, param);
  console.log("返回结果", res);
  return res;
};
