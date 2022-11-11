import styles from "./Pack.module.css";
import StarRatings from "react-star-ratings";

function PackCard({ product }) {
  const url = `${process.env.REACT_APP_IMAGE_PATH}${product.images[0]}`;

  const priceBefore = Math.round((product.price * 1.15 + Number.EPSILON) * 1) / 1;
  const numberReviews = Math.floor(Math.random() * (6000 - 3 + 1) + 3);
  const rating = Math.random() * (5 - 3.5 + 1) + 2.5;
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
          {description.length > 65 && (
            <p className={styles.paragraphCard}>{description.slice(0, 65)} ...</p>
          )}
          {description.length < 66 && <p className={styles.paragraphCard}>{description}</p>}
          <p className={`${styles.paragraphCard2} ${styles.linethrough}`}>${priceBefore}</p>
        </div>
        <div className={styles.smallCard}>
          <StarRatings rating={rating} starDimension="1rem" starSpacing="0px" />
          {`  ${numberReviews}`} Reviews
        </div>
      </div>
    </div>
  );
}

export default PackCard;
