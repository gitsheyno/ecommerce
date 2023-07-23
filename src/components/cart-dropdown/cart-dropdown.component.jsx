import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => {
          return <CartItem key={product.id} product={product} />;
        })}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
