import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid d-flex  justify-content-around">
        <ul class="navbar-nav  mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              Shop
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              About
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              Our mission
            </Link>
          </li>
        </ul>
        <ul class="navbar-nav  mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              Shop
            </Link>
          </li>
        </ul>
        <ul class="navbar-nav  mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" className={`${styles.customNavLink} nav-link`}>
              Cart
            </Link>
          </li>

          <li class="nav-item">
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
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
  <Link to="/" className="nav-link">
    Shop
  </Link>
</li>
<li class="nav-item">
  <Link to="/" className="nav-link">
    About
  </Link>
</li>

<li class="nav-item">
  <Link to="/" className="nav-link">
    Our mission
  </Link>
</li>
</ul> */
