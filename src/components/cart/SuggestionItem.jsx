import styles from "./SuggestionItem.module.css";
import AddToCartButton from "../buttons/addToCartButton/AddToCartButton";

function SuggestionItem({ product }) {
  const randomNum = Math.floor(Math.random() * 3);

  return (
    <div className={styles.slideItem}>
      <div className="row">
        <div className={`${styles.itemImgContainer} col-6 justify-content-center`}>
          <img
            className={styles.itemImg}
            src={process.env.REACT_APP_IMAGE_PATH + product.images[randomNum]}
            alt=""
          />
        </div>
        <div className={`${styles.description} col-6 justify-content-center`}>
          <div>
            <h3 className={`${styles.name}`}>{product.name}</h3>
            <p className={`${styles.price}`}>{`Actual price $${product.price}`}</p>
          </div>
          <AddToCartButton product={product} btnClassName={"suggestedItem"} toggle={false} />
        </div>
      </div>
    </div>
  );
}

export default SuggestionItem;
