import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function LeftNavbar({ showAbout, handleCloseAbout, handleLogout, user }) {
  return (
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
  );
}

export default LeftNavbar;
