import React from "react";
import styles from "./ItemDetail.module.css";

function ItemDetail() {
  return (
    <div className={styles.detail}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={process.env.REACT_APP_IMAGE_PATH + "hero.jpg"} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.nameContainer}>
          <h2 className={styles.name}>NAME</h2>
          <p className={styles.category}>CATEGORY</p>
        </div>
        <p className={styles.description}>DESCRIPTION</p>
        <button className={styles.btn}>Add to cartar</button>
        <div className={styles.itemsContainer}>items</div>
      </div>
    </div>
  );
}

export default ItemDetail;
