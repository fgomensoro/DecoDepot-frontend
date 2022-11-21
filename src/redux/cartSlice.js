import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const url = "imgPrueba3.jpg";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    items: [],
  },

  reducers: {
    addItem(state, action) {
      let sum = 0;
      const isInCart = state.items.find((product) => product.name === action.payload.name);

      // console.log(action.payload.image);

      if (!isInCart) {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          qty: action.payload.qty,
          slug: action.payload.slug,
        });
      } else {
        isInCart.qty += action.payload.qty;
      }
      state.items.map((item) => {
        sum += item.price * item.qty;
      });
      state.total = sum;
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

      state.items.map((item) => {
        sum += item.price * item.qty;
      });
      state.total = sum;
    },
    clearCart(state, action) {
      return (state = { total: 0, items: [] });
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, calculateTotal, removeItem, clearCart } = actions;

export default reducer;
