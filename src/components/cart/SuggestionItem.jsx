import React from "react";
import { Link } from "react-router-dom";
import styles from "./SuggestionItem.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

function SuggestionItem({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className={styles.slideItem}>
      <div className={styles.itemImgContainer}>
        <img
          className={styles.itemImg}
          src={process.env.REACT_APP_IMAGE_PATH + product.images[Math.floor(Math.random() * 3)]}
          alt=""
        />
      </div>
      <div className={styles.description}>
        <div>
          <h3 className={`${styles.name}`}>{product.name}</h3>
          <p className={`${styles.price}`}>{`Actual price $${product.price}`}</p>
        </div>
        <button
          className={styles.shopBtn}
          onClick={() =>
            dispatch(
              addItem({
                id: product.id,
                name: product.name,
                qty: 1,
                image: product.images[Math.floor(Math.random() * 3)],
                price: product.price,
              }),
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SuggestionItem;
