import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    storeUser(state, action) {
      return action.payload;
    },
  },
});
const { actions, reducer } = userSlice;
export const { storeUser } = actions;
export default reducer;
