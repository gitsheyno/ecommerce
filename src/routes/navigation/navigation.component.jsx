import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwonLogo } from "../../assets/crown.svg";
import "../navigation/navigation.styles.scss";
const Navigation = () => {
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
          <Link className="nav-link" to="/signin">
            SIGN-IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
