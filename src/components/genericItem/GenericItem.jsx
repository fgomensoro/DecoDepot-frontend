import styles from "./GenericItem.module.css";
import image1 from "./img/image1.jpg";
function GenericItem({ product }) {
  return (
    <div className={styles.cardCombo1}>
      <img className={styles.smallImage} src={image1} alt="comboImage" />
      <div className={styles.inline}>
        <h4 className={styles.titleH4}>Lorem Ipsum</h4>
        <p className={styles.titleH4}>$32</p>
      </div>
      <div className={styles.inline}>
        <p className={styles.paragraphCard}>Amet consectetur adipisicing elit.</p>
        <p className={`${styles.paragraphCard2} ${styles.linethrough}`}>$48</p>
      </div>
      <p className={styles.smallCard}>***** 19,020 Reviews</p>
    </div>
  );
}

export default GenericItem;
