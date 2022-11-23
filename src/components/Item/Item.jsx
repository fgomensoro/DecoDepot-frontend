import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ product }) {
  return (
    <div className={styles.slideItem}>
      <Link className="text-decoration-none" to={`/products/${product.slug}`}>
        <div className={styles.itemImgContainer}>
          <img
            className={styles.itemImg}
            src={process.env.REACT_APP_IMAGE_PATH + product.images[0]}
            alt=""
          />
        </div>
        <div className={styles.description}>
          <div className={styles.nameContainer}>
            <h3 className={styles.name}>{product.name}</h3>
          </div>
          <div className={styles.priceBtnContainer}>
          <p className={styles.price}>{`Price $${product.price}`}</p>
          <button className={styles.shopBtn}>Shop now</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
