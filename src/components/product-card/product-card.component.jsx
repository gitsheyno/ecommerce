import "./product-card.styles.scss";
import Button from "../../components/button/button.component";
import { addItem } from "../../store/cart/cart.reducer";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(addItem(product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={clickHandler}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
