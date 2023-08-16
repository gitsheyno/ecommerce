import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  cartItems: [],
  cartIsShown: false,
  //   totalAmount: 0,
  //   totalItems: 0,
};

export const CartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  //   const { newCartItems, updateQuantities, updateAmount } = payload;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ISSHOWN:
      return {
        ...state,
        cartIsShown: payload,
      };
    case CART_ACTION_TYPES.UPDATEITEMS:
      return {
        ...state,
        // cartItems: newCartItems,
        // totalAmount: updateAmount,
        // totalItems: updateQuantities,
        cartItems: payload,
      };

    default:
      return state;
  }
};
