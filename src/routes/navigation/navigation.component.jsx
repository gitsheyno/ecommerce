import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwonLogo } from "../../assets/crown.svg";
import "../navigation/navigation.styles.scss";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectUserSelector } from "../../store/user/user.selector";
import { cartIsOpen } from "../../store/cart/cart.selector";
const Navigation = () => {
  const currentUser = useSelector(selectUserSelector);
  const cartIsShown = useSelector(cartIsOpen);

  const handlerSignOut = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwonLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handlerSignOut}>
              SING OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartIsShown && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
