import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import AddToCartButton from "../../../buttons/addToCartButton/AddToCartButton";

function Item({ product }) {
  const dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div className={styles.slideItem}>
      <Link className="text-decoration-none" to={`/products/${product.slug}`}>
        <div className={styles.itemImgContainer}>
          <img
            className={styles.itemImg}
            src={process.env.REACT_APP_IMAGE_PATH + product.images[0]}
            alt=""
          />
        </div>
      </Link>
      <div className={styles.description}>
        <div>
          <small className={styles.name}>{product.name}</small>
          <small className={styles.price}> - ${dollarUSLocale.format(product.price)}</small>
        </div>
        <AddToCartButton product={product} btnClassName={"sliderItem"} />
      </div>
    </div>
  );
}

export default Item;
