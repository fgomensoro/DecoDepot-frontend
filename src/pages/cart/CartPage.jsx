import styles from "./Cart.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import OrderSummary from "../../components/cartPage/OrderSummary";
import ContinueToCheckout from "../../components/cartPage/ContinueToCheckout";

function CartPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.background}>
        <div className="row">
          <div className="col-4"></div>
          <div className={`${styles.cart} col-4`}>
            <OrderSummary />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className={`${styles.featured} col-6`}>
            <ContinueToCheckout />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <div className={styles.divider}>
      <Footer  />
      </div>
    </div>
  );
}

export default CartPage;
