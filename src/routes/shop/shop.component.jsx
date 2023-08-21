import { Route, Routes } from "react-router-dom";
import CaregoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategories } from "../../store/categories/categories.reducer";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const getCategoreisArray = await getCategoriesAndDocuments();
      dispatch(setCategories(getCategoreisArray));
    };

    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CaregoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
