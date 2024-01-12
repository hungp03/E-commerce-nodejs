import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./asyncActions";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    _categories: null,
    isLoading: false,
  },
  // Code logic xử lý sync action
  reducers: {
    
  },
  // Code logic xử lý async action
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action (Promise pending)
    builder.addCase(actions.getCategories.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action thành công (Promise fulfilled)
    builder.addCase(actions.getCategories.fulfilled, (state, action) => {
      //console.log(action);
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state._categories = action.payload;
    });

    // Khi thực hiện action thất bại (Promise rejected)
    builder.addCase(actions.getCategories.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

//export const {} = appSlice.actions;
//export reducer = reducer(s) = extrareducers
export default appSlice.reducer;
