import styles from "./QuantityButtons.module.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "../../../redux/cartSlice";
import axios from "axios";

function QuantityButtons({ product, setMessage }) {
  const [quantity, setQuantity] = useState(product.qty);
  const dispatch = useDispatch();

  const handleQuantity = (num) => {
    if (num === 1) {
      const getQuantity = async () => {
        const response = await axios({
          url: `${process.env.REACT_APP_API_URL}/products/${product.slug}`,
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

  useEffect(() => {
    setQuantity(product.qty);
  }, []);
  return (
    <>
      <button className={`${styles.plus} btn`} onClick={() => handleQuantity(-1)}>
        -
      </button>
      <input type="text" className={styles.quantity} value={quantity} readOnly="disabled" />
      <button className={`${styles.minus} btn`} onClick={() => handleQuantity(1)}>
        +
      </button>
    </>
  );
}

export default QuantityButtons;
