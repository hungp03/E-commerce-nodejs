import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import * as apis from "../../apis";

//https://techmaster.vn/posts/36779/huong-dan-su-dung-createasyncthunk-trong-redux-toolkit
export const getCategories = createAsyncThunk("app/categories", async () => {
  const response = await apis.apiGetCategories();
  //console.log(response);

  if (!response.success) {
    return isRejectedWithValue(response);
  }

  return response.categories;
});
