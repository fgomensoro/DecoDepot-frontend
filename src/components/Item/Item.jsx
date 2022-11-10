import React from "react";
import styles from "./Item.module.css";

function Item({ product }) {
  return (
    <div clasName={styles.slideItem}>
      <div clasName={styles.itemImgContainer}>
        <img
          className={styles.itemImg}
          src={process.env.REACT_APP_IMAGE_PATH + product.images[Math.floor(Math.random() * 3)]}
          alt=""
        />
      </div>
      <p>{product.price}</p>
    </div>
  );
}

export default Item;
