import styles from "./CheckoutForm.module.css";


function Product() {
  const url = `${process.env.REACT_APP_IMAGE_PATH}imgPrueba3.jpg`;

  

  return (
    <div className={`${styles.productSummary}`}>
      <img className={`${styles.productImg}`} src={url} alt="ProductImg" />
      <h3 className={styles.productDescription}>Product Title</h3>
      <p className={`${styles.align} ${styles.qty}`}> x 1</p>
      <p className={`${styles.align} ${styles.price}`}>$ 3000</p>
    </div>
  );
}

export default Product;
