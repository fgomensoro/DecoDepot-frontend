import styles from "./OrderSummary.module.css";
import Product from "./Product";
import { useSelector } from "react-redux";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function OrderSummary() {
  const cart = useSelector((state) => state.cart);
  let dollarUSLocale = Intl.NumberFormat("en-US");
  const url = `${process.env.REACT_APP_IMAGE_PATH}empty_cart-512.webp`;

  const cartLength = cart.items.length === 0 ? false : true;

  if (cartLength) {
    return (
      <div>
        <div className={`${styles.titleOrderSummary}`}>Order Summary</div>
        <div className={styles.orderSummary}>
          {cart.items.map((item) => {
            return <Product key={item.id} item={item} />;
          })}

          <div className={styles.totalsContainer}>
            <div className={styles.totals}>
              <p className={styles.pSubtotals}>Subtotal</p>
              <p className={styles.price}>$ {dollarUSLocale.format(cart.total)}</p>
            </div>
          </div>
        </div>
        <div className={styles.checkout}>
          <Link
            to="/checkout"
            type="button"
            className={`${styles.continueBtn} btn btn-dark btn-lg`}
          >
            <FaLock className={styles.lock} /> Continue to Checkout
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.emptyCartContainer}>
      <h2 className={styles.emptyCartTitle}>Your cart is empty</h2>
      <img className={styles.emptyCart} src={url} alt="Empty Cart" />

      <p className={styles.emptyCartParagraph}>
        Looks like you have not added anything to your cart. Go ahead & explore our featured
        products!
      </p>
    </div>
  );
}

export default OrderSummary;
