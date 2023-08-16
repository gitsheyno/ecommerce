import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((product) => {
              return <CartItem key={product.id} product={product} />;
            })}
          </div>
          <Button onClick={navigateHandler}>CHECKOUT</Button>
        </>
      ) : (
        <p className="empty-message ">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartDropDown;
