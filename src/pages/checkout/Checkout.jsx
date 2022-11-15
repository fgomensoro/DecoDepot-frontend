import Footer from "../../components/footer/Footer";

import CheckoutForm from "../../components/checkout/CheckoutForm";
import styles from "./Checkout.module.css";

function checkout() {
  return (
    <div>
      <div className={`${styles.cont} container`}>
        <CheckoutForm />
      </div>
      <Footer />
    </div>
  );
}

export default checkout;
