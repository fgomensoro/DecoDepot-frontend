import styles from "./CartItem.module.css";

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const formRef = useRef();
  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  function handleSubmitAdd(event) {
    event.preventDefault();
    const { value } = formRef.current.quantity;

    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        qty: quantity,
        image: product.productImage,
        price: product.price,
      }),
      setQuantity(0),
    );
  }

  function handleSubmitRemove(event) {
    event.preventDefault();
    dispatch(removeItem()), setQuantity(0);
  }

  return (
    <div className={`${styles.productContainer} container-fluid`}>
      <div className={`container-fluid`}>
        <div className="row">
          <div className="col-5">
            <div className={`${styles.productImage}`}>
              <img
                className={`${styles.productImage}`}
                src={process.env.REACT_APP_IMAGE_PATH + product.image}
                alt=""
              />
              <h3>{product.price + " " + "$"}</h3>
            </div>
          </div>
          <div className="col-7">
            <h2>{product.name}</h2>
            <span>Ships in 7-10 Days</span>
          </div>
          <div className={styles.formContainer}>
            <form ref={formRef} className={styles.form} /* onSubmit={handleSubmitAdd} */>
              <div className={styles.inline}>
                <button
                  className={`${styles.plus} btn`}
                  type="button"
                  onClick={() => handleMinus()}
                >
                  -
                </button>
                <input
                  type="text"
                  className={styles.quantity}
                  value={quantity}
                  name="quantity"
                  onChange={(event) => setQuantity(event.target.value)}
                />
                <button
                  className={`${styles.minus} btn`}
                  type="button"
                  onClick={() => handlePlus()}
                >
                  +
                </button>{" "}
                <button type="submit" className={styles.shopBtn} onClick={handleSubmitAdd}>
                  Add item
                </button>
                <button type="submit" className={styles.shopBtn} onClick={handleSubmitRemove}>
                  Remove
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
