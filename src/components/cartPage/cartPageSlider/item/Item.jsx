import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../../../../redux/cartSlice";

function Item({ product }) {
  const dollarUSLocale = Intl.NumberFormat("en-US");
  const dispatch = useDispatch();
  const [qty, setQty] = useState(null);

  const handleAdd = (e) => {
    dispatch(
      addItem({
        qty: 1,
        id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
      }),
    );
    setQty(qty + 1);
  };

  return (
    <div className={styles.slideItem}>
      <Link className="text-decoration-none" to={`/products/${product._id}`}>
        <div className={styles.itemImgContainer}>
          <img
            className={styles.itemImg}
            src={process.env.REACT_APP_IMAGE_PATH + product.images[Math.floor(Math.random() * 3)]}
            alt=""
          />
        </div>
      </Link>
      <div className={styles.description}>
        <div>
          <small className={styles.name}>{product.name}</small>
          <small className={styles.price}> - ${dollarUSLocale.format(product.price)}</small>
        </div>
        <button onClick={handleAdd} className={styles.shopBtn}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Item;
