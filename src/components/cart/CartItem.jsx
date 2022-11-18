import styles from "./CartItem.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cartSlice";
import axios from "axios";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(product.qty);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const dollarUSLocale = Intl.NumberFormat("en-US");

  const handleQuantity = (num) => {
    if (num === 1) {
      const getQuantity = async () => {
        const response = await axios({
          url: `${process.env.REACT_APP_API_URL}/products/${product.id}`,
          method: "GET",
        });
        if (response.data.stock > quantity) {
          dispatch(addItem({ name: product.name, qty: 1 }));
          return setQuantity(quantity + 1);
        } else {
          return setMessage("Out of stock!");
        }
      };
      getQuantity();
    } else {
      dispatch(removeItem({ name: product.name, qty: 1 }));
      setMessage("");
      return setQuantity(quantity - 1);
    }
  };

  function handleSubmitClear(event) {
    event.preventDefault();
    dispatch(removeItem({ name: product.name, qty: 10000 }));
  }


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
                <h3 className="text-center">${dollarUSLocale.format(product.price)}</h3>
              </div>
            </div>
            <div className="col-7 d-flex align-items-center ">
              <div>
                <h2>{product.name}</h2>
                <span>Ships in 7-10 Days</span>
                <div className={styles.input}>
                  <button
                    className={`${styles.plus} btn`}
                    type="button"
                    onClick={() => handleQuantity(-1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className={styles.quantity}
                    value={quantity}
                    name="quantity"
                    readOnly="disabled"
                  />
                  <button
                    className={`${styles.minus} btn`}
                    type="button"
                    onClick={() => handleQuantity(1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <p className={styles.amount}>You have {product.qty} of this in your cart</p>
              <form onSubmit={handleSubmitClear}>
                <button type="submit" className={styles.delete}>
                  <i className={`${styles.trash} bi bi-trash`}></i>
                </button>
              </form>
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
