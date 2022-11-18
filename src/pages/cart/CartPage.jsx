import styles from "./Cart.module.css";

import OrderSummary from "../../components/cartPage/OrderSummary";
import FeaturedProducts from "../../components/cartPage/FeaturedProducts";

function CartPage() {
  return (
    <div className={styles.background}>
      <div className="container">
        <div className={`${styles.cart}`}>
          <OrderSummary />
        </div>
        <div className={`${styles.featured}`}>
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
