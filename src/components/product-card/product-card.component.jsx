import "./product-card.styles.scss";
import Button from "../../components/button/button.component";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItem } = useContext(CartContext);

  const clickHandler = () => {
    addItem(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={clickHandler}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
