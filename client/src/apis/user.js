import axios from "../axios";

export const apiRegister = async (data) =>
  axios({
    url: "/user/register",
    method: "post",
    data,
  });

export const apiLogin = async (data) =>
  axios({
    url: "/user/login",
    method: "post",
    data,
  });
