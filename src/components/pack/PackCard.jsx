import styles from "./Pack.module.css";
import image1 from "./img/image1.jpg";

function PackCard({ product }) {
  console.log(product);
  console.log(product);
  const url = `${process.env.REACT_APP_IMAGE_PATH}${product.images[0]}`;

  const priceBefore = Math.round((product.price * 1.15 + Number.EPSILON) * 1) / 1;
  const numberReviews = Math.floor(Math.random() * (6000 - 3 + 1) + 1);
  let description = product.description;

  return (
    <div className={`${styles.smallCard} mt-3`}>
      <div className={`${styles.cardCombo1}`}>
        <img className={styles.smallImage} src={url} alt="comboImage" />
        <div className={styles.inline}>
          <h4 className={styles.titleH4}>{product.name}</h4>
          <p className={styles.titleH4}>${product.price}</p>
        </div>
        <div className={styles.inline}>
          {description.length > 70 && (
            <p className={styles.paragraphCard}>{description.slice(0, 70)} ...</p>
          )}
          {description.length < 71 && <p className={styles.paragraphCard}>{description}</p>}
          <p className={`${styles.paragraphCard2} ${styles.linethrough}`}>${priceBefore}</p>
        </div>
        <p className={styles.smallCard}>***** {numberReviews} Reviews</p>
      </div>
    </div>
  );
}

export default PackCard;
