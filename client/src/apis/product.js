import axios from "../axios";

export const apiGetProducts = async (params) =>
  axios({
    url: "/product/",
    method: "get",
    params,
  });
