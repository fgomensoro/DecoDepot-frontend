import styles from "./Cart.module.css";
import Footer from "../../components/footer/Footer";

import OrderSummary from "../../components/cartPage/OrderSummary";
import ContinueToCheckout from "../../components/cartPage/ContinueToCheckout";

function CartPage() {
  return (
    <div className={styles.background}>
      <div className="container">
        <div className={`${styles.cart}`}>
          <OrderSummary />
        </div>
        <div className={`${styles.featured}`}>
          <ContinueToCheckout />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
