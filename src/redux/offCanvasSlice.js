import { createSlice } from "@reduxjs/toolkit";

const offCanvasSlice = createSlice({
  name: "offCanvas",
  initialState: false,
  reducers: {
    toggleCart(state, action) {
      state === false ? (state = true) : (state = false);
      return state;
    },
  },
});
const { actions, reducer } = offCanvasSlice;
export const { toggleCart } = actions;
export default reducer;
