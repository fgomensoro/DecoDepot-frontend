import CheckoutForm from "../../components/checkout/CheckoutForm";
import styles from "./Checkout.module.css";

function checkout() {
  return (
    <div>
      <div className={`${styles.cont} container`}>
        <CheckoutForm />
      </div>
    </div>
  );
}

export default checkout;
