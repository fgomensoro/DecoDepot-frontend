import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const url = "imgPrueba3.jpg";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    items: [
      /*  {
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
        price: 1000,
        qty: 1,
      },
      {
        id: 3,
        name: "Wooden Chair",
        image: url,
        price: 500,
        qty: 1,
      }, */
    ],
  },

  reducers: {
    addItem(state, action) {
      let sum = 0;
      const isInCart = state.items.find((product) => product.name === action.payload.name);
      console.log(isInCart);
      if (!isInCart) {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: 700,
          qty: action.payload.qty,
        });
      } else {
        isInCart.qty += action.payload.qty;
      }
      state.items.forEach((item) => {
        sum += item.price * item.qty;
      });
      state.total = sum;
      console.log(action.payload.name);
    },

    /*    calculateTotal(state, action) {
      state.items.forEach((item) => {
        state.total += item.price;
      });
    }, */

    removeItem(state, action) {
      cart.cartItems = cart.cartItems.filter((product) => product.id !== action.payload.productId);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, calculateTotal } = actions;

export default reducer;
