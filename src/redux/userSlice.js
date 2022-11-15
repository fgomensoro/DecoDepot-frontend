import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    storeUser(state, action) {
      return action.payload;
    },
    logout(state, action) {
      state = {};
      return state;
    },
  },
});
const { actions, reducer } = userSlice;
export const { storeUser, logout } = actions;
export default reducer;
