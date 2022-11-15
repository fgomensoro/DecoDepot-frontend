import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";
import SuggestionItem from "../cart/SuggestionItem";

function Navbar() {
  const logoUrl = "decoDepotLogo.png";
  const [user, setUser] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const loggedUser = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

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
      <Offcanvas show={showAbout} onHide={handleCloseAbout}>
        <Offcanvas.Header>
          <h2 className={styles.sideBarTitle}>Deco Depot</h2>
          <button onClick={handleCloseAbout} className={styles.btnClose}>
            <i className="bi bi-x"></i>
          </button>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ul className={styles.aboutUsList + " " + "d-flex flex-column align-items-start pe-3 "}>
            <li>
              <Link to="/store" className={`${styles.sideLink} side-link`}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/store" className={`${styles.sideLink} side-link`}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/store" className={`${styles.sideLink} side-link`}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/store" className={`${styles.sideLink} side-link`}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/store" className={`${styles.sideLink} side-link`}>
                Shop
              </Link>
            </li>
            <li>
              <button onClick={() => handleLogout()} className={styles.loguot}>
                Logout
              </button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        show={showCart}
        onHide={handleCloseCart}
        placement={"end"}
        className={styles.cartSideBar}
      >
        <Offcanvas.Header className={`${styles.cartHeader} `}>
          <button onClick={handleCloseCart} className={styles.btnClose}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <h5
            className={`${
              cart.items.length !== 0 ? styles.cartTitle : styles.cartTitle2
            } text-center`}
          >
            My cart
          </h5>
        </Offcanvas.Header>

        <Offcanvas.Body
          className={`${cart.items.length !== 0 ? styles.cartBody1 : styles.cartBody}`}
        >
          <div className={styles.rssBlock}>
            <span className={styles.marqueeStyle}>&nbsp;FREE SHIPPING ON ORDERS OVER $32</span>
          </div>
          <Cart />
        </Offcanvas.Body>
        {cart.items.length !== 0 && (
          <div
            className={`${styles.cartFooter} d-flex  align-items-center justify-content-center order-2 w-100`}
          >
            <div className="d-flex flex-column align-items-center">
              <span>SUBTOTAL</span>
              <h3>{cart.total}$</h3>
            </div>

            <Link to="/checkout" className={styles.linkContinue}>
              <button className={styles.btnContinue}> Continue to checkout</button>
            </Link>
          </div>
        )}
      </Offcanvas>

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
            <button className={`${styles.customNavLinkButton} nav-link`} onClick={handleShowCart}>
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
