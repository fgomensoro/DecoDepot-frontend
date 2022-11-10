import React from "react";
import styles from "./Store.module.css";

function Store() {
  const url = process.env.REACT_APP_IMAGE_PATH + "store.jpg";
  return (
    <div className={`${styles.section} container`}>
      <div className={styles.card}>
        <img src={url} className={styles.image} alt="" />
        <button className={styles.button}>Store</button>
      </div>
    </div>
  );
}

export default Store;
