import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.util";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_ISSHOWN, boolean);

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

const removeFromCart = (cartItems, productToRemove, condition) => {
  const existingProduct = cartItems.find(
    (product) => product.id === productToRemove.id
  );

  let updatedItems = [];

  if (existingProduct.quantity !== 1 && condition == false) {
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

  updatedItems = cartItems.filter((product) => {
    return product.id !== productToRemove.id;
  });

  return updatedItems;
};
export const addItem = (cartItems, productToAdd) => {
  console.log(productToAdd);
  const updatedCart = addCartItem(cartItems, productToAdd);

  return createAction(CART_ACTION_TYPES.UPDATEITEMS, updatedCart);
};

export const removeItem = (cartItems, productToRemove, condition = false) => {
  const updatedCart = removeFromCart(cartItems, productToRemove, condition);

  return createAction(CART_ACTION_TYPES.UPDATEITEMS, updatedCart);
};
