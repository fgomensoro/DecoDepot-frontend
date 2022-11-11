import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const logoUrl = "decoDepotLogo.png";
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav
      className={`${
        colorChange ? styles.backBlue : styles.backGrey
      } navbar navbar-expand-lg fixed-top`}
    >
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

        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className={`${styles.customNavLink}   nav-link`}>
              <div className={styles.logo}> </div>
            </Link>
          </li>
        </ul>
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
