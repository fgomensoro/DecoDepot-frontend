import styles from "./CheckoutForm.module.css";

function Product({ item }) {
  const url = `${process.env.REACT_APP_IMAGE_PATH}${item.image}`;
  const dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div className={`${styles.productSummary}`}>
      <img className={`${styles.productImg}`} src={url} alt="ProductImg" />
      <h3 className={styles.productDescription}>{item.name}</h3>
      <p className={`${styles.align} ${styles.qty}`}> x {item.qty}</p>
      <p className={`${styles.align} ${styles.price}`}>$ {dollarUSLocale.format(item.price)}</p>
    </div>
  );
}

export default Product;
