import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
  name: "log",
  initialState: {
    value: null,
  },
  reducers: {
    IN: (state) => {
      state.value = true;
    },
    OUT: (state) => {
      state.value = false;
    },
  },
});

export const { IN, OUT } = logSlice.actions;

export default logSlice.reducer;
