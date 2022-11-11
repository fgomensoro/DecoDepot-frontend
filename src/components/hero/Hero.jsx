import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  const url = process.env.REACT_APP_IMAGE_PATH + "hero12.jpg";

  return (
    <div className={styles.background}>
      <img className={styles.image} src={url} alt="" />

      <div className={`${styles.textContainer}`}>
        <h1 className={styles.title}>Design you home interior</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
