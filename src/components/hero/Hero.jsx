import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  const imageUrl = "hero.jpg";
  return (
    <div className={`${styles.background} row`}>
      <div className="col-12 col-md-6">
        <h1 className={styles.title}>Design you home interior</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className="col-12 col-md-6">
        <img src={process.env.REACT_APP_IMAGE_PATH + imageUrl} alt="" />
      </div>
    </div>
  );
}

export default Hero;
