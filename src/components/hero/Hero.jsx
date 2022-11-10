import React from "react";

function Hero() {
  const imageUrl = "hero.jpg";
  return (
    <div className={`${styles.background} row`}>
      <div className="col-12 col-md-6">
        <h1 className={styles.title}>Design you home interior</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className="col-12 col-md-6">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default Hero;
