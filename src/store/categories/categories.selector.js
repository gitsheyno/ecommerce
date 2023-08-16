import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesSelector = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, cattegory) => {
      const { title, items } = cattegory;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSLice) => categoriesSLice.isLoading
);
