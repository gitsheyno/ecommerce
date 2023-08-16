import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const cartIsOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.cartIsShown
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((prev, product) => {
    return prev + product.quantity;
  }, 0)
);

export const selectCartQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, prev) => {
      return prev.price * prev.quantity + acc;
    }, 0)
);
