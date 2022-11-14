import styles from "./CartItem.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

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
            <form
              className={styles.form}
              onSubmit={(event) => {
                event.preventDefault();
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
              }}
            >
              <div className={styles.inline}>
                <button
                  className={`${styles.plus} btn`}
                  type="button"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <input type="text" className={styles.quantity} value={quantity} />
                <button
                  className={`${styles.minus} btn`}
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>{" "}
                <button type="submit" className={styles.shopBtn}>
                  Add item
                </button>
                <button type="submit" className={styles.shopBtn}>
                  Remove
                </button>
              </div>

              {/*     <div className={styles.inline}>
                <button
                  className={`${styles.plus} btn`}
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
                <input type="text" className={styles.quantity} value={quantity} />
                <button
                  className={`${styles.minus} btn`}
                  type="button"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
