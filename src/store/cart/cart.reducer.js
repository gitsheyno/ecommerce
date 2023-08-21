import { CART_ACTION_TYPES } from "./cart.types";
import { createSlice } from "@reduxjs/toolkit";
const CART_INITIAL_STATE = {
  cartItems: [],
  cartIsShown: false,
  //   totalAmount: 0,
  //   totalItems: 0,
};

// export const setIsCartOpen = (boolean) =>
//   createAction(CART_ACTION_TYPES.SET_CART_ISSHOWN, boolean);

const addCartItem = (cartItems, productToAdd) => {
  console.log(cartItems, productToAdd);
  // Check if the product exists in cartItems
  const existingProduct = cartItems.find(
    (product) => product.id === productToAdd.id
  );
  let res = [];
  if (existingProduct) {
    // If the product exists, update its quantity
    res = cartItems.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  } else {
    // If the product doesn't exist, add a new product with quantity 1
    res = [...cartItems, { ...productToAdd, quantity: 1 }];
  }
  return res;
};

const removeFromCart = (cartItems, productToRemove) => {
  const existingProduct = cartItems.find(
    (product) => product.id === productToRemove.id
  );

  let updatedItems = [];

  if (existingProduct.quantity !== 1) {
    updatedItems = cartItems.map((product) => {
      return productToRemove.id === product.id
        ? {
            ...product,
            quantity: product.quantity - 1,
          }
        : product;
    });

    return updatedItems;
  }

  updatedItems = clearFromCart(cartItems, productToRemove);

  return updatedItems;
};

const clearFromCart = (cartItems, productToRemove) => {
  const updatedItems = cartItems.filter((product) => {
    return product.id !== productToRemove.id;
  });

  return updatedItems;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItem(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItem(state, action) {
      state.cartItems = removeFromCart(state.cartItems, action.payload);
    },
    clearItem(state, action) {
      state.cartItems = clearFromCart(state.cartItems, action.payload);
    },
    setIsCartOpen(state, action) {
      state.cartIsShown = action.payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem, clearItem, setIsCartOpen } =
  cartSlice.actions;
// export const CartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   //   const { newCartItems, updateQuantities, updateAmount } = payload;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ISSHOWN:
//       return {
//         ...state,
//         cartIsShown: payload,
//       };
//     case CART_ACTION_TYPES.UPDATEITEMS:
//       return {
//         ...state,
//         // cartItems: newCartItems,
//         // totalAmount: updateAmount,
//         // totalItems: updateQuantities,
//         cartItems: payload,
//       };

//     default:
//       return state;
//   }
// };
