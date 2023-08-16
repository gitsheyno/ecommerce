import { useSelector } from "react-redux";
import {
  selectCategoriesSelector,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesSelector);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        <div className="shop-container">
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} products={products} title={title} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CategoriesPreview;
