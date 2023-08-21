// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rooteReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
