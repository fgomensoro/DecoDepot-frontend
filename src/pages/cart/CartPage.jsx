import styles from "./Cart.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import OrderSummary from "../../components/cart/OrderSummary";

function CartPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.background}>
        <div className="row">
          <div className="col-4"></div>
          <div className={`${styles.cart} col-4`}>
            <OrderSummary />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
