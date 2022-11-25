import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ product }) {
  const urlImg = process.env.REACT_APP_IMAGE_PATH + product.images[0];
  const urlImg2 = process.env.REACT_APP_IMAGE_PATH + product.images[1];

  const handleImage = (e) => (e.currentTarget.src = urlImg);
  const handleImage2 = (e) => (e.currentTarget.src = urlImg2);

  const dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div className={styles.slideItem}>
      <Link className="text-decoration-none" to={`/products/${product.slug}`}>
        <div className={styles.itemImgContainer}>
          <img
            className={styles.itemImg}
            src={process.env.REACT_APP_IMAGE_PATH + product.images[0]}
            onMouseOver={handleImage2}
            onMouseOut={handleImage}
            alt="Product Image"
          />
        </div>
        <div className={styles.description}>
          <div className={styles.nameContainer}>
            <h3 className={styles.name}>{product.name}</h3>
          </div>
          <div className={styles.priceBtnContainer}>
            <p className={styles.price}>Price ${dollarUSLocale.format(product.price)}</p>
            <button className={styles.shopBtn}>Shop now</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
