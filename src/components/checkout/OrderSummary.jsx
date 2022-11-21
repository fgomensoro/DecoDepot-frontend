import styles from "./CheckoutForm.module.css";
import Products from "./Products";
import { useSelector } from "react-redux";
import { useState } from "react";

function OrderSummary({ tax, total }) {
  const cartStore = useSelector((state) => state.cart);
  const [cart, setCart] = useState(cartStore.items);
  const dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div className={styles.orderSummary}>
      <div className={`${styles.titleOrderSummary}`}>Order Summary</div>

      <Products cart={cart} />

      <div className={styles.totalsContainer}>
        <div className={styles.totals}>
          <p className={styles.pSubtotals}>Subtotal</p>
          <p className={styles.price}>$ {dollarUSLocale.format(cartStore.total)}</p>
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
          <p className={styles.priceTotal}> $ {dollarUSLocale.format(total)} </p>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
