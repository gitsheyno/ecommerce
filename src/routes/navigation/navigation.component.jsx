import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwonLogo } from "../../assets/crown.svg";
import "../navigation/navigation.styles.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartIsShown } = useContext(CartContext);
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
