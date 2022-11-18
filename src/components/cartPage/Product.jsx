import styles from "./OrderSummary.module.css";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import axios from "axios";

function Product({ item }) {
  const [quantity, setQuantity] = useState(item.qty);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const url = `${process.env.REACT_APP_IMAGE_PATH}${item.image}`;
  const dollarUSLocale = Intl.NumberFormat("en-US");
  const priceBefore = Math.round((item.price * 1.15 + Number.EPSILON) * 1) / 1;

  const handleQuantity = (num) => {
    if (num === 1) {
      const getQuantity = async () => {
        const response = await axios({
          url: `${process.env.REACT_APP_API_URL}/products/${item.slug}`,
          method: "GET",
        });
        console.log(response.data);
        if (response.data.stock > quantity) {
          dispatch(addItem({ name: item.name, qty: 1 }));
          return setQuantity(quantity + 1);
        } else {
          return setMessage("Out of stock!");
        }
      };
      getQuantity();
    } else {
      dispatch(removeItem({ name: item.name, qty: 1 }));
      setMessage("");
      return setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setQuantity(item.qty);
  }, []);

  const handleRemove = (e) => {
    dispatch(removeItem(item));
  };

  return (
    <div className={`${styles.productCard} p-4`}>
      <div className={`${styles.productSummary}`}>
        <img className={`${styles.productImg}`} src={url} alt="ProductImg" />

        <div className={styles.centerCol}>
          <h4 className={styles.titleH4}>{item.name}</h4>
          <div className={styles.inline}>
            <button className={`${styles.plus} btn`} onClick={() => handleQuantity(-1)}>
              -
            </button>
            <input type="text" className={styles.quantity} value={quantity} readOnly="disabled" />
            <button className={`${styles.minus} btn`} onClick={() => handleQuantity(1)}>
              +
            </button>
          </div>
        </div>
        <div className={styles.block}>
          <Link className={styles.trash} onClick={handleRemove}>
            <HiOutlineTrash />
          </Link>
          <p className={styles.titleH42}>${dollarUSLocale.format(item.price)}</p>
          <p className={`${styles.paragraphCard2} ${styles.linethrough}`}>
            ${dollarUSLocale.format(priceBefore)}
          </p>
        </div>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Product;

// const dollarUSLocale = Intl.NumberFormat("en-US");
// <p className={styles.titleH42}>${dollarUSLocale.format(item.price)}</p>
