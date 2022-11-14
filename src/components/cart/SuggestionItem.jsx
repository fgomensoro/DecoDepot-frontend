import React from "react";
import { Link } from "react-router-dom";
import styles from "./SuggestionItem.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

function SugestionItem({ suggestion }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className={styles.slideItem}>
      {/* <Link className="text-decoration-none" to={`/detail/${suggestion._id}`}> */}
      <div className={styles.itemImgContainer}>
        <img
          className={styles.itemImg}
          src={process.env.REACT_APP_IMAGE_PATH + suggestion.images[Math.floor(Math.random() * 3)]}
          alt=""
        />
      </div>
      <div className={styles.description}>
        <div>
          <h3 className={styles.name}>{suggestion.name}</h3>
          <p className={styles.price}>{`Actual price $${suggestion.price}`}</p>
        </div>
        <button
          className={styles.shopBtn}
          onClick={() =>
            dispatch(
              addItem({
                id: suggestion.id,
                name: suggestion.name,
                qty: 1,
                image: suggestion.productImage,
                price: suggestion.price,
              }),
            )
          }
        >
          Add to cart
        </button>
      </div>
      {/*  </Link> */}
    </div>
  );
}

export default SugestionItem;
