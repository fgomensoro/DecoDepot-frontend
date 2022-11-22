import React, { useEffect, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toggleCart } from "../../redux/offCanvasSlice";
import { TiArrowSortedDown } from "react-icons/ti";

import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

function Navbar() {
  const url = process.env.REACT_APP_IMAGE_PATH + "logo.svg";
  const [colorChange, setColorchange] = useState(false);
  const [showLeftNavbar, setShowLeftNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const toggle = useSelector((state) => state.offCanvas);

  const handleToggle = () => {
    dispatch(toggleCart());
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseLeftNavbar = () => setShowLeftNavbar(false);
  const handleShowLeftNavbar = () => setShowLeftNavbar(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

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
      } navbar navbar-expand fixed-top`}
    >
      <LeftNavbar
        showLeftNavbar={showLeftNavbar}
        handleCloseLeftNavbar={handleCloseLeftNavbar}
        handleLogout={handleLogout}
        user={user}
      />
      <RightNavbar
        showCart={showCart}
        handleToggle={handleToggle}
        cart={cart}
        toggle={toggle}
        toggleCart={toggleCart}
      />

      <div className={`${styles.nav} container `}>
        <div className={styles.exploreBtn}>
          <button
            className={`${styles.customNavLinkButton}  nav-link`}
            onClick={handleShowLeftNavbar}
          >
            Explore
            <TiArrowSortedDown className={styles.icon} />
            {/* <i className={`${styles.icon} bi bi-arrow-down-circle-fill`}></i> */}
          </button>
        </div>

        <div className={`${styles.logoContainer} nav-item`}>
          <Link to="/" className={`${styles.customNavLink} ${styles.customNavLink2} nav-link`}>
            {/* <div className={styles.logo} style={{ backgroundImage: `url(${url})` }}></div> */}
            <img src={url} className={styles.logo} alt="logo" />
          </Link>
        </div>

        <ul className="navbar-nav mb-0">
          <li className="nav-item">
            <button className={`${styles.customNavLinkButton} nav-link`} onClick={handleToggle}>
              <i className={`${styles.customNavLink} ${styles.cart} bi bi-cart-fill`}></i>
            </button>
          </li>
          {user && (
            <li className={`${styles.myAccount} nav-item`}>
              <Link to={`/myaccount`} className={`${styles.customNavLink} nav-link`}>
                My account
              </Link>
            </li>
          )}

          {user ? (
            <li className="nav-item">
              <Link
                to="/login"
                onClick={() => handleLogout()}
                className={`${styles.customNavLink} nav-link`}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className={`${styles.customNavLink} nav-link`}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
