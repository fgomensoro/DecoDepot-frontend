import styles from "./CheckoutForm.module.css";
import Products from "./Products";
import { useSelector } from "react-redux";

function OrderSummary() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className={styles.orderSummary}>
      <div className={`${styles.titleOrderSummary}`}>Order Summary</div>
      <Products />

      <div className={styles.totalsContainer}>
        <div className={styles.totals}>
          <p className={styles.pSubtotals}>Subtotal</p>
          <p className={styles.price}>$ 12000</p>
        </div>
        <div className={styles.totals}>
          <p className={styles.pSubtotals}>Shipping</p>
          <p className={styles.price}> -- </p>
        </div>
        <div className={styles.totals}>
          <p className={styles.pSubtotals}>Taxes</p>
          <p className={styles.price}> -- </p>
        </div>
        <div className={styles.hrLine}></div>
        <div className={styles.totals}>
          <p className={styles.pTotal}>Total</p>
          <p className={styles.priceTotal}> $ 12000 </p>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
