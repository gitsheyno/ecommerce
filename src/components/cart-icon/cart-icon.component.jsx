import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "../cart-icon/cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {
  const { setCartIsShown } = useContext(CartContext);

  const dropDownHnadler = (e) => {
    setCartIsShown((prev) => {
      return !prev;
    });
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-item" onClick={dropDownHnadler} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
