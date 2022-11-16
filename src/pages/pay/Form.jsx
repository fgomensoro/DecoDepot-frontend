import styles from "./Pay.module.css";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

function CheckoutForm() {
  return (
    <div>
      <h2 className={`${styles.shippingAddress} mb-4`}>Shipping</h2>
      <form className={styles.form2}>
        <div className={`${styles.group} form-group`}>
          <button className={`${styles.button} btn`}>
            <BsCheckCircleFill className={`${styles.check}`} />
          </button>
          <h4 className={`${styles.item2} ${styles.freeShipping}`}>Free Shipping</h4>
        </div>
      </form>

      <p className={styles.line}></p>

      <h2 className={`${styles.shippingAddress} mb-4`}>Billing & payment</h2>
      <form className={styles.form3}>
        <div className={`${styles.group} form-group`}>
          <button className={`${styles.button2} btn`}>
            <BsCheckCircleFill className={`${styles.check}`} />
          </button>
          <h4 className={`${styles.item3} ${styles.freeShipping}`}>Credit Card</h4>
        </div>
      </form>

      <form className={styles.form}>
        <div className={`${styles.labelInputForm2} form-group`}>
          <label className={styles.label} htmlFor="nameOnCard">
            Name on card
          </label>
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="nameOnCard"
            placeholder="Name on card"
          />
        </div>

        <div className={`${styles.labelInputForm} form-group`}>
          <label className={styles.label} htmlFor="cardNumber">
            Card number
          </label>
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="cardNumber"
            placeholder="1234 1234 1234 1234"
          />
        </div>
        <div className={`${styles.labelInputForm} form-group`}>
          <label className={styles.label} htmlFor="expiration">
            Expiration
          </label>
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="expiration"
            placeholder="MM / AA"
          />
        </div>
        <div className={`${styles.labelInputForm} form-group`}>
          <label className={styles.label} htmlFor="cvv">
            Expiration
          </label>
          <input type="text" className={`${styles.item} form-control`} id="cvv" placeholder="CVV" />
        </div>

        <div className={`${styles.links} form-group`}>
          <Link to="/" className={`${styles.placeMyOrder} btn btn-block`}>
            Place my order
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
