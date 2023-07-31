import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const endPoint = useParams();
  console.log(endPoint);
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${title}`}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
