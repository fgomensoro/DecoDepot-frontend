import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    storeCart(state, action) {
      return action.payload;
    },
  },
});
const { actions, reducer } = cartSlice;
export const { storeCart } = actions;
export default reducer;
