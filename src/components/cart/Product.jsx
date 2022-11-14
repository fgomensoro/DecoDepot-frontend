import styles from "./OrderSummary.module.css";
import { HiOutlineTrash } from "react-icons/hi";

function Product({ item }) {
  const url = `${process.env.REACT_APP_IMAGE_PATH}${item.image}`;
  const dollarUSLocale = Intl.NumberFormat("en-US");
  const priceBefore = Math.round((item.price * 1.15 + Number.EPSILON) * 1) / 1;

  return (
    <div className={`${styles.productSummary}`}>
      <img className={`${styles.productImg}`} src={url} alt="ProductImg" />

      <div className={styles.centerCol}>
        <h4 className={styles.titleH4}>{item.name}</h4>
        <div className={styles.inline}>
          <button className={`${styles.plus} btn`}>+</button>
          <input type="text" className={styles.quantity} value={item.qty} />
          <button className={`${styles.minus} btn`}>-</button>
        </div>
      </div>
      <div className={styles.block}>
        <a className={styles.trash}>
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
