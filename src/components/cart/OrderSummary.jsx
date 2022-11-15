import styles from "./OrderSummary.module.css";
import Products from "./Products";
import { useSelector } from "react-redux";
import { useState } from "react";

function OrderSummary() {
  const cartStore = useSelector((state) => state.cart.items);
  // console.log(cart);
  const [cart, setCart] = useState(cartStore);

  let dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div>
      <div className={`${styles.titleOrderSummary}`}>Order Summary</div>
      <div className={styles.orderSummary}>
        <Products cart={cart} />
        <div className={styles.totalsContainer}>
          <div className={styles.totals}>
            <p className={styles.pSubtotals}>Subtotal</p>
            <p className={styles.price}>$ {dollarUSLocale.format(cart.total)}</p>
          </div>
        </div>
      </div>
      <div className={styles.checkoutContainer}>
        <button type="button" class={`${styles.continueBtn} btn btn-dark btn-lg`}>
          Continue to Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
