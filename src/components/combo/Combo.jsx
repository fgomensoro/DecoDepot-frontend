import styles from "./Combo.module.css";


function Combo() {
  return (
    <div className={styles.bigContain}>
      <div className="d-flex">
        <h3 className={styles.title}>Oral Care</h3>
        <hr className={styles.line} />
      </div>

      <div className={`${styles.comboContain} d-flex`}>
        <div>
          <img className={styles.bigImage} src={bigImage} alt="comboBigImage" />
        </div>
        <div className="d-flex">
          <div className={styles.row1}>
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
            <div className={styles.cardCombo2}>
              <img className={styles.smallImage} src={image2} alt="comboImage" />
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
          </div>
          <div className={styles.row2}>
            <div className={styles.cardCombo1}>
              <img className={styles.smallImage} src={image3} alt="comboImage" />
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
            <div className={styles.cardCombo2}>
              <img className={styles.smallImage} src={image4} alt="comboImage" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Combo;
