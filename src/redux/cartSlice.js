import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const url = "imgPrueba3.jpg";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 3500,
    items: [
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
        price: 1000,
        qty: 1,
      },
      {
        id: 3,
        name: "Wooden Chair",
        image: url,
        price: 500,
        qty: 1,
      },
    ],
  },

  reducers: {
    addItem(state, action) {
      let sum = 0;
      const isInCart = state.items.find((product) => product.name === action.payload.name);

      if (!isInCart) {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
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

    removeItem(state, action) {
      let sum = 0;
      const isInCart = state.items.find((product) => product.name === action.payload.name);

      if (isInCart.qty - action.payload.qty > 0) {
        isInCart.qty -= action.payload.qty;
      } else {
        let newCart = state.items.filter((item) => {
          return item.name !== action.payload.name;
        });
        state.items = newCart;
      }

      state.items.forEach((item) => {
        sum += item.price * item.qty;
      });
      state.total = sum;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, calculateTotal, removeItem } = actions;

export default reducer;
