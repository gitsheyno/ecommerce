// import { createContext, useReducer } from "react";

// export const CartContext = createContext({
//   cartIsShown: false,
//   setCartIsShown: () => {},
//   cartItems: [],
//   addItem: () => {},
//   totalItems: 0,
//   setTotalItems: () => {},
//   removeItem: () => {},
//   totalAmount: 0,
//   setTotalAmount: () => {},
// });

// const addCartItem = (cartItems, productToAdd) => {
//   // Check if the product exists in cartItems
//   const existingProduct = cartItems.find(
//     (product) => product.id === productToAdd.id
//   );
//   let res = [];
//   if (existingProduct) {
//     // If the product exists, update its quantity
//     res = cartItems.map((product) =>
//       product.id === productToAdd.id
//         ? { ...product, quantity: product.quantity + 1 }
//         : product
//     );
//   } else {
//     // If the product doesn't exist, add a new product with quantity 1
//     res = [...cartItems, { ...productToAdd, quantity: 1 }];
//   }
//   return res;
// };

// const removeFromCart = (cartItems, productToRemove, condition) => {
//   const existingProduct = cartItems.find(
//     (product) => product.id === productToRemove.id
//   );

//   let updatedItems = [];

//   if (existingProduct.quantity !== 1 && condition == false) {
//     updatedItems = cartItems.map((product) => {
//       return productToRemove.id === product.id
//         ? {
//             ...product,
//             quantity: product.quantity - 1,
//           }
//         : product;
//     });

//     return updatedItems;
//   }

//   updatedItems = cartItems.filter((product) => {
//     return product.id !== productToRemove.id;
//   });

//   return updatedItems;
// };

// const INITIAL_STATE = {
//   cartItems: [],
//   cartIsShown: false,
//   totalAmount: 0,
//   totalItems: 0,
// };

// const USER_ACTION_TYPES = {
//   SET_CART_ISSHOWN: "SET_CART_ISSHOWN",
//   UPDATEITEMS: "UPDATEITEMS",
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   const { newCartItems, updateQuantities, updateAmount } = payload;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CART_ISSHOWN:
//       return {
//         ...state,
//         cartIsShown: payload,
//       };
//     case USER_ACTION_TYPES.UPDATEITEMS:
//       return {
//         ...state,
//         cartItems: newCartItems,
//         totalAmount: updateAmount,
//         totalItems: updateQuantities,
//       };
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   const { cartIsShown, cartItems, totalItems, totalAmount } = state;

//   const setCartIsShown = () => {
//     dispatch({ type: "SET_CART_ISSHOWN", payload: !state.cartIsShown });
//   };

//   const updatedQuantities = (newCartItems) => {
//     const itemQuantities = newCartItems.reduce((prev, product) => {
//       return prev + product.quantity;
//     }, 0);

//     return itemQuantities;
//   };

//   const updatedAmount = (newCartItems) => {
//     const totalAmount = newCartItems.reduce((acc, prev) => {
//       return prev.price * prev.quantity + acc;
//     }, 0);

//     return totalAmount;
//   };

//   const updateCartItemsReducer = (newCartItems) => {
//     const updateAmount = updatedAmount(newCartItems);
//     const updateQuantities = updatedQuantities(newCartItems);
//     dispatch({
//       type: "UPDATEITEMS",
//       payload: { newCartItems, updateQuantities, updateAmount },
//     });
//   };

//   const addItem = (productToAdd) => {
//     const updatedCart = addCartItem(cartItems, productToAdd);

//     updateCartItemsReducer(updatedCart);
//   };

//   const removeItem = (productToRemove, condition = false) => {
//     const updatedCart = removeFromCart(cartItems, productToRemove, condition);

//     updateCartItemsReducer(updatedCart);
//   };

//   console.log(totalItems);
//   const value = {
//     cartIsShown,
//     setCartIsShown,
//     addItem,
//     cartItems,
//     totalItems,
//     removeItem,
//     totalAmount,
//   };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
