import { createSlice } from "@reduxjs/toolkit";
const url = "decoDepotLogoShort.jpeg";
const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      id: 1,
      name: "Wooden Table",
      image: url,
      price: 2000,
      qty: 1,
    },
    {
      id: 2,
      name: "Wooden Coffee Table",
      image: url,
      price: 1200,
      qty: 1,
    },
    {
      id: 3,
      name: "Wooden Chair",
      image: url,
      price: 700,
      qty: 1,
    },
  ],

  reducers: {
    addItem(state, action) {
      // PARA HACER CONSOLE LOG DENTRO DE LOS REDUCERS IMPORTAR Y PONER CURRENT
      console.log(current(cart));
      state.cartItems.push({
        id: action.payload.productId,
        name: action.payload.productName,
        image: action.payload.productImage,
        price: action.payload.productPrice,
        qty: 1,
      });
    },

    removeItem(state, action) {
      cart.cartItems = cart.cartItems.filter((product) => product.id !== action.payload.productId);
    },
  },
});
const { actions, reducer } = cartSlice;
export const { storeCart } = actions;

export default reducer;
