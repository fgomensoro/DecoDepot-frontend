import styles from "./OrderSummary.module.css";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import QuantityButtons from "../buttons/quantityButtons/QuantityButtons";

function Product({ product }) {
  // const [quantity, setQuantity] = useState(product.qty);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const url = `${process.env.REACT_APP_IMAGE_PATH}${product.image}`;
  const dollarUSLocale = Intl.NumberFormat("en-US");
  const priceBefore = Math.round((product.price * 1.15 + Number.EPSILON) * 1) / 1;

  const handleRemove = (e) => {
    dispatch(removeItem(product));
  };

  return (
    <div className={`${styles.productCard} p-4`}>
      <div className={`${styles.productSummary}`}>
        <img className={`${styles.productImg}`} src={url} alt="ProductImg" />

        <div className={styles.centerCol}>
          <h4 className={styles.titleH4}>{product.name}</h4>
          <div className={styles.inline}>
            <QuantityButtons product={product} setMessage={setMessage} />
            {/* <button className={`${styles.plus} btn`} onClick={() => handleQuantity(-1)}>
              -
            </button>
            <input type="text" className={styles.quantity} value={quantity} readOnly="disabled" />
            <button className={`${styles.minus} btn`} onClick={() => handleQuantity(1)}>
              +
            </button> */}
          </div>
        </div>
        <div className={styles.block}>
          <Link className={styles.trash} onClick={handleRemove}>
            <HiOutlineTrash />
          </Link>
          <p className={styles.titleH42}>${dollarUSLocale.format(product.price)}</p>
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
