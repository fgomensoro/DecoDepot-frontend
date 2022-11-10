import React from "react";
import styles from "./Item.module.css";

function Item({ product }) {
  return (
    <div className={styles.slideItem}>
      <div className={styles.itemImgContainer}>
        <img
          className={styles.itemImg}
          src={process.env.REACT_APP_IMAGE_PATH + product.images[Math.floor(Math.random() * 3)]}
          alt=""
        />
      </div>
      <div className={styles.description}>
        <div>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.price}>{`Actual price $${product.price}`}</p>
        </div>
        <button className={styles.shopBtn}>Shop now</button>
      </div>
    </div>
  );
}

export default Item;
