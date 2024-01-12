import axios from "../axios";

export const apigetProducts = async (params) =>
  axios({
    url: "/product/",
    method: "get",
    params,
  });
