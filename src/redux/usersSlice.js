import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    storeToken(state, action) {
      return [action.payload];
    },
    reset: () => [],
  },
});
const { actions, reducer } = usersSlice;
export const { storeToken, reset } = actions;
export default reducer;
