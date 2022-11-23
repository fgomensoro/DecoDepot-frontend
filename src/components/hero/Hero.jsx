import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

function Hero() {
  const url = process.env.REACT_APP_IMAGE_PATH + "hero12.jpg";

  return (
    <div className={styles.background}>
      <img className={styles.image} src={url} alt="Hero Img" />

      <div className={`${styles.textContainer}`}>
        <h1 className={styles.title}>Design your home interior</h1>
        <button className={styles.button}>
          <Link className={styles.link} to="/store">
            Shop Now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
