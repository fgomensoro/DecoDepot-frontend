import React from "react";
import styles from "./ProductsHero.module.css";
import { Link } from "react-router-dom";

function ProductsHero({ category }) {
  return (
    <div>
      <div className={`${styles.header} d-flex justify-content-center align-items-center`}>
        <div className={styles.wrapper}>
          <h1 className={styles.bigLetter}>
            {category ? "Our" + " " + category + "s" : "Our Products"}
          </h1>{" "}
          {/*   {`${category}s`} */}
          <p>Design your home interior with your heart</p>
        </div>
      </div>
      <div className={`${styles.leftColumn} col-12 `}>
        <h3 className={styles.titleLeft}>Categories</h3>
        <ul className={styles.list}>
          <li>
            <Link to="/store" className={`${styles.customNavLink} nav-link`}>
              All Products
            </Link>
          </li>
          <li>
            <Link to="/store/table" className={`${styles.customNavLink} nav-link`}>
              Tables
            </Link>
          </li>
          <li>
            <Link to="/store/chair" className={`${styles.customNavLink} nav-link`}>
              Chairs
            </Link>
          </li>
          <li>
            <Link to="/store/bed" className={`${styles.customNavLink} nav-link`}>
              Beds
            </Link>
          </li>
          <li>
            <Link to="/store/sofa" className={`${styles.customNavLink} nav-link`}>
              Sofas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductsHero;
