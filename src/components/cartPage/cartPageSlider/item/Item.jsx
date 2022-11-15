import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ product }) {
  let dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div className={styles.slideItem}>
      <Link className="text-decoration-none" to={`/products/${product._id}`}>
        <div className={styles.itemImgContainer}>
          <img
            className={styles.itemImg}
            src={process.env.REACT_APP_IMAGE_PATH + product.images[Math.floor(Math.random() * 3)]}
            alt=""
          />
        </div>

        <div className={styles.description}>
          <div>
            <small className={styles.name}>{product.name}</small>
            <small className={styles.price}> - ${dollarUSLocale.format(product.price)}</small>
          </div>
          <button className={styles.shopBtn}>Add</button>
        </div>
      </Link>
    </div>
  );
}

export default Item;
