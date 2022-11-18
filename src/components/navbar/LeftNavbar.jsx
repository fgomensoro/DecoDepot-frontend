import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function LeftNavbar({ showLeftNavbar, handleCloseLeftNavbar, handleLogout, user }) {
  return (
    <Offcanvas className={styles.leftNavBody} show={showLeftNavbar} onHide={handleCloseLeftNavbar}>
      <Offcanvas.Header>
        <h2 className={styles.sideBarTitle}>Deco Depot</h2>
        <button onClick={handleCloseLeftNavbar} className={styles.btnClose}>
          <i className="bi bi-x"></i>
        </button>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <ul className={styles.aboutUsList}>
          <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
            <Link to="/" className={`${styles.sideLink} side-link`}>
              Home
            </Link>
          </li>
          <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
            <Link to="/store" className={`${styles.sideLink} side-link`}>
              Go to store
            </Link>
          </li>
          <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
            <Link to="/about-us" className={`${styles.sideLink} side-link`}>
              About us
            </Link>
          </li>
          <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
            <Link to="/cart" className={`${styles.sideLink} side-link`}>
              Cart
            </Link>
          </li>
          {user && (
            <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
              <Link to={`/myaccount`} className={`${styles.sideLink} side-link`}>
                My profile
              </Link>
            </li>
          )}
          {user && (
            <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
              <Link to="/checkout" className={`${styles.sideLink} side-link`}>
                Checkout
              </Link>
            </li>
          )}
          {user && user.isAdmin && (
            <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
              <Link to="/admin" className={`${styles.sideLink} side-link`}>
                Admin
              </Link>
            </li>
          )}
          {user ? (
            <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
              <Link
                to="/login"
                onClick={() => handleLogout()}
                className={`${styles.sideLink} side-link`}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className={styles.listItem} onClick={handleCloseLeftNavbar}>
              <Link to="/login" className={`${styles.sideLink} side-link`}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LeftNavbar;
