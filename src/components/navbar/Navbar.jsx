import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const logoUrl = "decoDepotLogo.png";
  return (
    <nav className={`${styles.backGrey} navbar navbar-expand-lg `}>
      <div className="container d-flex  justify-content-between">
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
        <div className={styles.logo}>
          <Link to="/" className={`${styles.customNavLink}   nav-link`}></Link>
        </div>

        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <button className={`${styles.customNavLinkButton} nav-link`}>
              Cart
              <i className={`${styles.customNavLink} ${styles.cart} bi bi-cart-fill`}></i>
            </button>
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

/* 
<ul className="navbar-nav  mb-2 mb-lg-0">
<li className="nav-item">
  <Link to="/" className={`${styles.customNavLink}  nav-link`}>
    <img
      className={styles.logoImg}
      src={process.env.REACT_APP_IMAGE_PATH + logoUrl}
      alt="Logo"
    />
  </Link>
</li>
</ul> */
