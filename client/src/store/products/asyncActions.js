import { createAsyncThunk} from "@reduxjs/toolkit";
import * as apis from "../../apis";

//https://techmaster.vn/posts/36779/huong-dan-su-dung-createasyncthunk-trong-redux-toolkit
export const getNewProducts = createAsyncThunk("product/newProducts", async (data, {rejectWithValue}) => {
  const response = await apis.apiGetProducts({sort: '-createdAt'});
  //console.log(response);

  if (!response.success) {
    return rejectWithValue(response);
  }

  return response.products;
});
