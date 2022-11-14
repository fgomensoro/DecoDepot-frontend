import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const logoUrl = "decoDepotLogo.png";
  const [colorChange, setColorchange] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
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
            <i class="bi bi-x"></i>
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
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showCart} onHide={handleCloseCart} placement={"end"}>
        <Offcanvas.Header>
          <button onClick={handleCloseCart} className={styles.btnClose}>
            <i class="bi bi-x"></i>
          </button>
          <Offcanvas.Title>My cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you have chosen. Like,
          text, images, lists, etc.
        </Offcanvas.Body>
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
