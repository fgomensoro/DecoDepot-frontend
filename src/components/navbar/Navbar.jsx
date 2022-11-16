import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toggleCart } from "../../redux/offCanvasSlice";

import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

function Navbar() {
  const url = process.env.REACT_APP_IMAGE_PATH + "decoDepotLogo.png";
  const [user, setUser] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [showLeftNavbar, setShowLeftNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const loggedUser = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const toggle = useSelector((state) => state.offCanvas);
  const handleToggle = () => {
    dispatch(toggleCart());
  };

  useEffect(() => {
    const getLoggedUser = () => {
      if (!loggedUser.firstname) {
        setUser(false);
      }
      if (loggedUser.firstname) {
        setUser(true);
      }
    };
    getLoggedUser();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseLeftNavbar = () => setShowLeftNavbar(false);
  const handleShowLeftNavbar = () => setShowLeftNavbar(true);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

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
        loggedUser={loggedUser}
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
            <i
              className={`${styles.customNavLink} ${styles.arrowWeight} bi bi-chevron-down arrowWeight`}
            ></i>
          </button>
        </div>

        <div className={`${styles.logo} nav-item`}>
          <Link to="/" className={`${styles.customNavLink}   nav-link`}>
            <div className={styles.logo} style={{ backgroundImage: `url(${url})` }}></div>
          </Link>
        </div>

        <ul className="navbar-nav mb-0">
          <li className="nav-item">
            <button className={`${styles.customNavLinkButton} nav-link`} onClick={handleToggle}>
              Cart
              <i className={`${styles.customNavLink} ${styles.cart} bi bi-cart-fill`}></i>
            </button>
          </li>

          <li className="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              My accout
            </Link>
          </li>
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
