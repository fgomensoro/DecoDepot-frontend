import styles from "./OrderSummary.module.css";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "../../redux/cartSlice";

function Product({ item }) {
  const dispatch = useDispatch();
  const url = `${process.env.REACT_APP_IMAGE_PATH}${item.image}`;
  const dollarUSLocale = Intl.NumberFormat("en-US");
  const priceBefore = Math.round((item.price * 1.15 + Number.EPSILON) * 1) / 1;
  const [qty, setQty] = useState(item.qty);

  useEffect(() => {
    setQty(item.qty);
  }, [item.qty]);

  const handleMinus = (e) => {
    dispatch(removeItem({ name: item.name, qty: 1 }));
    setQty(qty - 1);
  };

  const handlePlus = (e) => {
    dispatch(addItem({ name: item.name, qty: 1 }));
    setQty(qty + 1);
  };

  const handleRemove = (e) => {
    dispatch(removeItem(item));
  };

  return (
    <div className={`${styles.productSummary}`}>
      <img className={`${styles.productImg}`} src={url} alt="ProductImg" />

      <div className={styles.centerCol}>
        <h4 className={styles.titleH4}>{item.name}</h4>
        <div className={styles.inline}>
          <button className={`${styles.plus} btn`} onClick={handleMinus}>
            -
          </button>
          <input type="text" className={styles.quantity} value={qty} readOnly="disabled" />
          <button className={`${styles.minus} btn`} onClick={handlePlus}>
            +
          </button>
        </div>
      </div>
      <div className={styles.block}>
        <a className={styles.trash} onClick={handleRemove}>
          <HiOutlineTrash />
        </a>
        <p className={styles.titleH42}>${dollarUSLocale.format(item.price)}</p>
        <p className={`${styles.paragraphCard2} ${styles.linethrough}`}>
          ${dollarUSLocale.format(priceBefore)}
        </p>
      </div>
    </div>
  );
}

export default Product;
