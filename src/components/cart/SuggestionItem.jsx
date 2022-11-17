import React from "react";
import { Link } from "react-router-dom";
import styles from "./SuggestionItem.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

function SuggestionItem({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const randomNum = Math.floor(Math.random() * 3);

  const handleClickAdd = () => {
    dispatch(
      addItem({
        id: product._id,
        name: product.name,
        qty: 1,
        image: product.images[randomNum],
        price: product.price,
      }),
    );
  };

  return (
    <div className={styles.slideItem}>
      <div className="row">
        <div className={`${styles.itemImgContainer} col-6 justify-content-center`}>
          <img
            className={styles.itemImg}
            src={process.env.REACT_APP_IMAGE_PATH + product.images[randomNum]}
            alt=""
          />
        </div>
        <div className={`${styles.description} col-6 justify-content-center`}>
          <div>
            <h3 className={`${styles.name}`}>{product.name}</h3>
            <p className={`${styles.price}`}>{`Actual price $${product.price}`}</p>
          </div>
          <button className={styles.shopBtn} onClick={handleClickAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuggestionItem;
