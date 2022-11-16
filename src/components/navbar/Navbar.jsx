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
  const logoUrl = "decoDepotLogo.png";
  const [user, setUser] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
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

  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);
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
      } navbar navbar-expand-lg fixed-top`}
    >
      <LeftNavbar
        showAbout={showAbout}
        handleCloseAbout={handleCloseAbout}
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

      <div className="container d-flex  justify-content-between">
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/store" className={`${styles.customNavLink} nav-link`}>
              Shop
            </Link>
          </li>
          <li className="nav-item ">
            <button className={`${styles.customNavLinkButton}  nav-link`} onClick={handleShowAbout}>
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
