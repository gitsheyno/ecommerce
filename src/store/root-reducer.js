import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { CartReducer } from "./cart/cart.reducer";

export const rooteReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: CartReducer,
});
