import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={`${styles.backGrey} navbar navbar-expand-lg `}>
      <div className="container-fluid d-flex  justify-content-around">
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              Shop
            </Link>
          </li>
          <li className="nav-item ">
            <button className={`${styles.customNavLinkButton} nav-link`}>
              About
              <i
                className={`${styles.customNavLink} ${styles.arrowWeight} bi bi-chevron-down arrowWeight`}
              ></i>
            </button>
          </li>
        </ul>
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              LOGO
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              Cart
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              My accout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
