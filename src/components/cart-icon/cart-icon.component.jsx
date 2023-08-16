import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "../cart-icon/cart-icon.styles.scss";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartIsOpen } from "../../store/cart/cart.selector";
import { selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
// import { selectCartQuantity } from "../../store/cart/cart.selector";
const CartIcon = () => {
  const dispatch = useDispatch();
  // const { setCartIsShown, totalItems } = useContext(CartContext);
  const totalItems = useSelector(selectCartCount);
  const cartIsShown = useSelector(cartIsOpen);
  console.log(cartIsOpen);
  const dropDownHnadler = (e) => {
    // setCartIsShown();
    dispatch(setIsCartOpen(!cartIsShown));
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-item" onClick={dropDownHnadler} />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
