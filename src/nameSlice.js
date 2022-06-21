import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name : "name",
  initialState: {
    value: "",
  },
  reducers: {
    change: function (state, action) {
      state.value = action.payload;
    }
  }
});

export default nameSlice.reducer;