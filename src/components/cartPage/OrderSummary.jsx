import styles from "./OrderSummary.module.css";
import Products from "./Products";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function OrderSummary() {
  const cart = useSelector((state) => state.cart);

  // const [cart, setCart] = useState(cartStore);

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
      <div className={styles.checkout}>
        <Link to="/checkout" type="button" className={`${styles.continueBtn} btn btn-dark btn-lg`}>
          <FaLock className={styles.lock} /> Continue to Checkout
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
