import { createSlice, current } from "@reduxjs/toolkit";
const url = "decoDepotLogoShort.jpeg";
const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },

  reducers: {
    // addToCart(state, action) {
    //   console.log(action.payload);
    //   const currentCart = current(state);
    //   console.log(currentCart);
    //   let isInCart = currentCart.products.some((cartItem) => cartItem.id === action.payload.id);

    //   if (isInCart) {
    //     const updatedItem = currentCart.products.map((cartItem) => {
    //       if (cartItem.id !== action.payload.id) return cartItem;
    //       return { ...cartItem, qty: cartItem.qty + 1 };
    //     });
    //     state.products = updatedItem;
    //   } else {
    //     state.products.push({
    //       id: action.payload.id,
    //       name: action.payload.name,
    //       image: action.payload.image,
    //       price: action.payload.price,
    //       qty: 1,
    //     });
    //   }
    // },

    //   const isInCart = cart.find((element) => element.id === product.id);
    //   if (!isInCart) {
    //     setCart([...cart, { ...product, qty: 1 }]);
    //   } else {
    //     setCart(
    // cart.map((element) => {
    //   if (element.id !== product.id) return element;
    //   return { ...element, qty: element.qty + 1 };
    // }),
    // );
    // }
    //   state.cartItems.push({
    //     id: action.payload.productId,
    //     name: action.payload.productName,
    //     image: action.payload.productImage,
    //     price: action.payload.productPrice,
    //     qty: 1,
    //   });
    // },

    removeItem(state, action) {
      cart.cartItems = cart.cartItems.filter((product) => product.id !== action.payload.productId);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { storeCart, addToCart } = actions;

export default reducer;
