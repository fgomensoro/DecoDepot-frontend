import React from "react";
import styles from "./Store.module.css";
import { Link, useNavigate } from "react-router-dom";

function Store() {
  const url = process.env.REACT_APP_IMAGE_PATH + "store.jpg";
  const navigate = useNavigate();
  return (
    <div className={`${styles.section} container`}>
      <div className={styles.buttonContainer}>
        <div className={styles.line}></div>
        <button className={styles.buttonSmall}>
          <Link className={styles.link} to={"/store"}>
            Store
          </Link>
        </button>
        <div className={styles.line}></div>
      </div>
      <div className={styles.imageContainer}>
        <img src={url} className={styles.image} alt="" />
        <button className={styles.buttonBig} onClick={() => navigate("/store")}>
          Store
        </button>
      </div>
    </div>
  );
}

export default Store;
