import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  const url = process.env.REACT_APP_IMAGE_PATH + "hero.jpg";

  return (
    <div
      className={styles.background}
      //   style={{
      //     backgroundImage: `url(${url})`,
      //   }}
    >
      <img className={styles.image} src={url} alt="" />

      <div className={`${styles.textContainer} col-12 col-md-6`}>
        <h1 className={styles.title}>Design you home interior</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;

{
  /*  */
}

{
  /* <div className={styles.background}>
<div className="container">
  <div className="row py-5">
    <div className={`${styles.textContainer} col-12 col-md-6`}>
      <h1 className={styles.title}>Design you home interior</h1>
      <button className={styles.button}>Shop Now</button>
    </div>
    <div className="col-12 col-md-6">
      <div className={styles.imageContainer}>
        <img className={styles.image} src={url} alt="" />
      </div>
    </div>
  </div>
</div>
</div> */
}
