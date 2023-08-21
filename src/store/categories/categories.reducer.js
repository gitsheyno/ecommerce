import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

// export const categoriesReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return { ...state, isLoading: true };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categories: payload, isLoading: false };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILD:
//       return { ...state, error: payload, isLoading: false };
//     default:
//       return state;
//   }
// };
