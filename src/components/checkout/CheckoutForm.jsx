import styles from "./CheckoutForm.module.css";
import Form from "./Form";
import OrderSummary from "./OrderSummary";

function CheckoutForm() {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-6 text-center">
          <Form />
        </div>
        <div className="col-12 col-lg-1"></div>
        <div className={`${styles.col2} col-12 col-lg-5 text-center`}>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;

// decoDepotLogo.png
