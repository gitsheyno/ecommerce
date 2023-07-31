import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { CategoriesContext } from "../../context/categoriesContext.context";
import CaregoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CaregoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
