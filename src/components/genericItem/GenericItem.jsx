import styles from "./GenericItem.module.css";

import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

import AddToCartButton from "../buttons/addToCartButton/AddToCartButton";

function GenericItem({ product }) {
  let description = product.description;
  const rating = Math.random() * (5 - 3.5 + 1) + 2.5;
  const numberReviews = Math.floor(Math.random() * (6000 - 3 + 1) + 3);

  return (
    <div className={`${styles.smallCard} mt-3`}>
      <div className={`${styles.cardCombo1}`}>
        <div className={styles.imgContainer}>
          <div className={styles.detailsBtns}>
            <Link
              className={`${styles.btnSee} text-decoration-none`}
              to={`/detail/${product.slug}`}
            >
              See More
            </Link>
            <AddToCartButton product={product} btnClassName={"genericItem"} />
          </div>
          <img
            className={styles.img}
            src={`${process.env.REACT_APP_IMAGE_PATH + product.images[2]}`}
            alt="comboImage"
          />
        </div>

        <div className={styles.inline}>
          <h4 className={styles.titleH4}>{product.name}</h4>
          <p className={styles.titleH4}>${product.price}</p>
        </div>
        <div className={styles.inline}>
          {description.length > 65 && (
            <p className={styles.paragraphCard}>{description.slice(0, 65)} ...</p>
          )}
          {description.length < 66 && <p className={styles.paragraphCard}>{description}</p>}
          <p className={`${styles.paragraphCard2} ${styles.linethrough}`}>
            ${Math.round(product.price * 1.25)}
          </p>
        </div>
        <div className={styles.smallCard}>
          <StarRatings rating={rating} starDimension="1rem" starSpacing="0px" />
          {`  ${numberReviews}`} Reviews
        </div>
      </div>
    </div>
  );
}

export default GenericItem;
