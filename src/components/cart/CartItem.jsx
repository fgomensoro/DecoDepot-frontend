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
    <div className="container-fluid">
      <div className={`container-fluid`}>
        <div className="row">
          <div className="col-5">
            <div className={`${styles.productImage}`}>
              <img
                className={`${styles.productImage}`}
                src={process.env.REACT_APP_IMAGE_PATH + product.image}
                alt=""
              />
            </div>
          </div>
          <div className="col-7">
            <h2>{product.name + " " + product.price + "$"}</h2>
            <span>Ships in 7-10 Days</span>
          </div>
          <div>
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
              <button
                type="button"
                className={styles.buttonUpDown}
                onClick={() => setQuantity(quantity - 1)}
              >
                <i className={`${styles.arrowUpDown} bi bi-arrow-down-circle `}></i>
              </button>
              <input
                className={styles.inputNumber}
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <button
                type="button"
                className={styles.buttonUpDown}
                onClick={() => setQuantity(quantity + 1)}
              >
                <i className={`${styles.arrowUpDown}  bi bi-arrow-up-circle `}></i>
              </button>
              <button type="submit">Add to cart</button>
              <button type="submit">Remove from cart</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
