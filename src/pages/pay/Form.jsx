import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./Pay.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaCcMastercard, FaCcVisa, FaCcAmex, FaCcPaypal, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const [cardNumber, setCardNumber] = useState("");
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postOrder = async () => {
      await axios({
        url: `${process.env.REACT_APP_API_URL}/orders`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + state.user.token,
        },
        data: {
          prods: state.cart.items,
          status: "Not paid",
          address: state.shippingAddress,
          total: state.cart.total,
        },
      });
    };

    postOrder();
  };

  return (
    <div>
      <h2 className={`${styles.shippingAddress} mb-4`}>Shipping</h2>
      <form className={styles.form2}>
        <div className={`${styles.group2} form-group`}>
          <button disabled className={`${styles.button} btn`}>
            <BsCheckCircleFill className={`${styles.check}`} />
          </button>
          <h4 className={`${styles.item2} ${styles.freeShipping}`}>Free Shipping</h4>
        </div>
      </form>

      <p className={styles.line}></p>

      <h2 className={`${styles.shippingAddress} mb-4`}>Billing & payment</h2>
      <form className={styles.form3}>
        <div className={`${styles.group} form-group`}>
          <div className="d-flex">
            <button disabled className={`${styles.button2} btn`}>
              <BsCheckCircleFill className={`${styles.check}`} />
            </button>
            <h4 className={`${styles.item3} ${styles.freeShipping}`}>Credit Card</h4>
          </div>
          <div className="mx-1">
            <FaCcMastercard className={styles.cardsIcons} />
            <FaCcVisa className={styles.cardsIcons} />
            <FaCcAmex className={styles.cardsIcons} />
            <FaCcPaypal className={styles.cardsIcons} />
          </div>
        </div>
      </form>

      <form onSubmit={handleSubmit} className={styles.form}>
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
        <FaLock className={styles.faLock} />
        <div className={`${styles.labelInputForm} form-group`}>
          <label className={styles.label} htmlFor="cardNumber">
            Card number
          </label>
          <input
            type="number"
            className={`${styles.item} form-control`}
            id="cardNumber"
            placeholder="1234 1234 1234 1234"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className={`${styles.labelInputForm} form-group`}>
          <label className={styles.label} htmlFor="expiration">
            Expiration
          </label>
          <input
            type="number"
            className={`${styles.item} form-control`}
            id="expiration"
            placeholder="MM / AA"
          />
        </div>
        <div className={`${styles.labelInputForm} form-group`}>
          <label className={styles.label} htmlFor="cvv">
            CVV
          </label>
          <input
            type="number"
            className={`${styles.item} form-control`}
            id="cvv"
            placeholder="CVV"
          />
        </div>

        <div className={`${styles.links} form-group`}>
          <button type="submit" className={`${styles.placeMyOrder} btn btn-block`}>
            Place my order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
