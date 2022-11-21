import styles from "./CartItem.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cartSlice";
import axios from "axios";
import QuantityButtons from "../buttons/quantityButtons/QuantityButtons";

function CartItem({ product }) {
  // const [quantity, setQuantity] = useState(product.qty);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const dollarUSLocale = Intl.NumberFormat("en-US");

  const handleRemove = () => {
    dispatch(removeItem(product));
  };

  return (
    <div>
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
                <h3 className={`${styles.productPrice} text-center`}>${dollarUSLocale.format(product.price)}</h3>
              </div>
            </div>
            <div className="col-7 d-flex align-items-center ">
              <div>
                <h2 className={styles.productTitle}>{product.name}</h2>
                <span>Ships in 7-10 Days</span>
                <div className={styles.input}>
                  <QuantityButtons product={product} setMessage={setMessage} />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <p className={styles.amount}>You have {product.qty} of this in your cart</p>

              <button onClick={() => handleRemove()} className={styles.delete}>
                <i className={`${styles.trash} bi bi-trash`}></i>
              </button>
            </div>
            <p className={styles.message}>{message}</p>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default CartItem;
