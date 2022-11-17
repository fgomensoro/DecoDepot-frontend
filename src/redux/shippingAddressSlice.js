import { createSlice } from "@reduxjs/toolkit";

const shippingAddressSlice = createSlice({
  name: "shippingAddress",
  initialState: [],
  reducers: {
    storeShippingAddress(state, action) {
      state = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        address: action.payload.address,
        apt: action.payload.apt,
        city: action.payload.city,
        country: action.payload.country,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        phone: action.payload.phone,
      };
      return action.payload;
    },

    submitOrder(state, action) {
      state = {};
      return state;
    },
  },
});
const { actions, reducer } = shippingAddressSlice;
export const { storeShippingAddress, submitOrder } = actions;
export default reducer;
