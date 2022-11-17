import styles from "./CheckoutForm.module.css";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

function CheckoutForm() {
  return (
    <div>
      <h2 className={`${styles.shippingAddress} mb-4`}>Shipping address</h2>
      <form className={styles.form}>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="firstname"
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="lastname"
            placeholder="Last name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="Address"
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="Apt"
            placeholder="Apt, suite, etc."
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="city"
            placeholder="City"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="state"
            placeholder="State"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="zipCode"
            placeholder="ZIP Code"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="phone"
            placeholder="Phone"
          />
        </div>
        <div className={`${styles.links} form-group`}>
          <Link className={styles.return} to="/cart">
            <TiArrowBack className="mb-1" /> Return to cart
          </Link>
          <Link to="/pay" type="button" className={`${styles.continue} btn btn-block`}>
            Continue
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
