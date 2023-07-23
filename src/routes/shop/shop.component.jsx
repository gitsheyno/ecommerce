import { useContext } from "react";
import { ShopContext } from "../../context/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { currentShopData } = useContext(ShopContext);
  return (
    <div className="products-container">
      {currentShopData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
