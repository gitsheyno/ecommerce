import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwonLogo } from "../../assets/crown.svg";
import "../navigation/navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handlerSignOut = async () => {
    await signOutUser();
  };

  console.log(currentUser);
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
